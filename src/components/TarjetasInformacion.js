import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../hojas de estilo/tarjetaInfo.css";

export function TarjetasInformacion(props) {
  const mostrarBarraProgreso = props.mostrarBarraProgreso;

  const obtenerPorcentaje = (texto) => {
    const porcentajeRegex = /(\d+)%/; // Expresión regular para encontrar un número seguido de %
    const match = porcentajeRegex.exec(texto);
    if (match) {
      return parseInt(match[1], 10); // Devuelve el número encontrado como entero
    }
    return null;
  };

  const porcentaje = obtenerPorcentaje(props.sujeto);

  return (
    <>
      <div className="card">
        <div className="img">
          <img className="imagen-pin" src={props.imagen} alt="pin.png" />
        </div>
        <div className="informacion">
          <div className="titulo">{props.titulo}</div>
          <strong>
            <div className="sujeto">{props.sujeto}</div>
          </strong>
        </div>
        {mostrarBarraProgreso && porcentaje && (
          <div className="progress-bar">
            <CircularProgressbar
              value={porcentaje}
              text={`${porcentaje}%`}
              strokeWidth={10}
              styles={{
                root: { width: "40px" },
                path: { stroke: "#00FF00" },
                text: { fill: "#00FF00" },
                trail: { stroke: "#f0f0f0" }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
