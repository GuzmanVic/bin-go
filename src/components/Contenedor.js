import React, { useState } from "react";
import "../hojas de estilo/Contenedor.css";

import verde from "../imagenes/verde.png";
import amarillo from "../imagenes/amarillo.png";
import rojo from "../imagenes/rojo.png";
import { Tarjeta } from "./Tarjeta.js";
import { TarjetasInformacion } from "./TarjetasInformacion";

export function Contenedor(props) {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  let imagen;
  let porcentaje = parseInt(props.porcentaje);

  if (porcentaje < 50) {
    imagen = verde;
  } else if (porcentaje >= 50 && porcentaje < 75) {
    imagen = amarillo;
  } else {
    imagen = rojo;
  }

  const abrirTarjeta = () => {
    setMostrarTarjeta(true);
  };

  const cerrarTarjeta = () => {
    setMostrarTarjeta(false);
  };

  return (
    <>
      <div className="bote" onClick={abrirTarjeta}>
        <div className="imagen">
          <img className="imagen-bote" src={imagen} alt="Contenedor.png" />
        </div>
        <div className="texto-bote">
          <strong>
            <p>Contenedor</p>
          </strong>
          <p className="ubicacion">{props.ubicacion}</p>
        </div>
        <div className="tipo">
          <strong>
            <p>{props.tipo}</p>
          </strong>
          <p className="porcentaje">{props.porcentaje}</p>
        </div>
      </div>
      {mostrarTarjeta && (
        <Tarjeta
          onClose={cerrarTarjeta}
          ubicacion={props.ubicacion} // Pasar la ubicación del contenedor a la Tarjeta
          tipo={props.tipo} // Pasar el tipo del contenedor a la Tarjeta
          porcentaje={props.porcentaje} // Pasar el porcentaje del contenedor a la Tarjeta
        />
      )}
    </>
  );
}
