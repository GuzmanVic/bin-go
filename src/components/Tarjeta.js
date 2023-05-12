import React from "react";
import "../hojas de estilo/Tarjeta.css";

export function Tarjeta(props) {
  const cerrarTarjeta = () => {
    props.onClose(); // Llama a la función onClose proporcionada por el componente padre para cerrar la tarjeta
  };

  return (
    <div id="contenedor-tarjeta" className="tarjeta">
      <div id="front" className="front">
        {/* Contenido del frente de la tarjeta */}
        <h2>Título de la tarjeta</h2>
        <p>Contenido de la tarjeta</p>
        <button id="cerrar-tarjeta" onClick={cerrarTarjeta}>
          Cerrar
        </button>
      </div>
      <div id="back" className="back">
        {/* Contenido de la parte posterior de la tarjeta */}
        <h2>Título de la parte posterior de la tarjeta</h2>
        <p>Contenido de la parte posterior de la tarjeta</p>
      </div>
    </div>
  );
}
