import React from "react";
import { Contenedor } from "./Contenedor.js";
import "../App.css"; //CSS DE LA CLASE
import { DatosUbicacion } from "./datos2.js";
import { useState, useEffect } from "react";




function obtenerDatosUbicacion() {
  const ubicaciones = ['Edificio 2', 'CC2', 'Pasillo Cafetería', 'Cafetería', 'Edificio 1', 'Pasillo Exterior'];
  const porcentajes = [...Array(101).keys()];
  const tipos = ['MIXTO', 'PET', 'orgánico', 'inorgánico'];

  const ubicacion = ubicaciones[Math.floor(Math.random() * ubicaciones.length)];
  const porcentaje = porcentajes[Math.floor(Math.random() * porcentajes.length)];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];

  return {
    ubicacion,
    porcentaje,
    tipo
  };
}

export function Listader() {
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDatosUbicacion([obtenerDatosUbicacion(), obtenerDatosUbicacion(), obtenerDatosUbicacion(), obtenerDatosUbicacion(), obtenerDatosUbicacion(), obtenerDatosUbicacion(), obtenerDatosUbicacion()]);
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
