import React from "react";
import "../hojas de estilo/Tarjeta.css";
import pin from "../imagenes/amarillo.png";
import tipo from "../imagenes/verde.png";
import llenado from "../imagenes/contenedor-de-basura.png";
import { TarjetasInformacion } from "./TarjetasInformacion";
export function Tarjeta(props) {
  const cerrarTarjeta = () => {
    props.onClose(); // Llama a la función onClose proporcionada por el componente padre para cerrar la tarjeta
  };

  return (
    <div id="contenedor-tarjeta" className="tarjeta">
      <button className="cerrar-tarjeta" onClick={cerrarTarjeta}>
        X
      </button>
      <div className="izquierda">
        <h1>Contenedor</h1>
        <div className="info">
        <TarjetasInformacion 
          imagen={pin}
          titulo='Ubicación'
          sujeto="Cafeteria"/>
          <TarjetasInformacion 
          imagen={tipo}
          titulo='Tipo'
          sujeto="Mixto"/>
          <TarjetasInformacion 
          imagen={llenado}
          titulo='Lleno al'
          sujeto="35%"/>
        </div>
      </div>
      <div id="front" className="front">
      </div>
      <div id="back" className="back">
        {/* Contenido de la parte posterior de la tarjeta */}
      </div>
    </div>
  );
}
