import React from "react";
import "../hojas de estilo/Contenedor.css";

import verde from "../imagenes/verde.png";
import amarillo from "../imagenes/amarillo.png";
import rojo from "../imagenes/rojo.png";

export function Contenedor(props) {
  let imagen;
  let porcentaje = parseInt(props.porcentaje);

  if (porcentaje < 50) {
    imagen = verde;
  } else if (porcentaje >= 50 && porcentaje < 75) {
    imagen = amarillo;
  } else {
    imagen = rojo;
  }

  return (
    <div className="bote">
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
        <p>{props.porcentaje}</p>
      </div>
    </div>
  );
}
