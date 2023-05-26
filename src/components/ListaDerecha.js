import React from "react";
import { Contenedor } from "./Contenedor.js";
import "../App.css"; //CSS DE LA CLASE

import { useState, useEffect } from "react";

export function Listader() {
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    function obtenerDatosUbicacion() {
      const ubicaciones = ['Edificio 2', 'CC2', 'Pasillo Cafetería', 'Cafetería', 'Edificio 1', 'Pasillo Exterior'];
      const porcentajes = [...Array(101).keys()];
      const tipos = ['mixto', 'PET', 'orgánico', 'inorgánico'];

      const ubicacion = ubicaciones[Math.floor(Math.random() * ubicaciones.length)];
      const porcentaje = porcentajes[Math.floor(Math.random() * porcentajes.length)];
      const tipo = tipos[Math.floor(Math.random() * tipos.length)];

      return {
        ubicacion,
        porcentaje,
        tipo
      };
    }

    const initialData = Array.from({ length: 7 }, () => obtenerDatosUbicacion());
    setDatosUbicacion(initialData);

    const interval = setInterval(() => {
      const newData = Array.from({ length: 7 }, () => obtenerDatosUbicacion());
      setDatosUbicacion(newData);
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {datosUbicacion.map((datos, index) => (
        <Contenedor
          key={index}
          ubicacion={datos.ubicacion}
          porcentaje={`${datos.porcentaje}%`}
          tipo={datos.tipo}
        />
      ))}
    </>
  );
}
