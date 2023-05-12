import React, { useState } from "react";
import "../hojas de estilo/Tarjeta.css";
import pin from "../imagenes/amarillo.png";
import tipo from "../imagenes/verde.png";
import dañado from "../imagenes/rojo.png";
import lleno from "../imagenes/verde.png";
import ausente from "../imagenes/contenedor-de-basura.png";

import { TarjetasInformacion } from "./TarjetasInformacion";
import referencia from "../imagenes/LogoPNG.png";
import { TarjetaReporte } from "./TarjetaReporte";

export function Tarjeta(props) {
  const [mostrarReporte, setMostrarReporte] = useState(false);

  const cerrarTarjeta = () => {
    props.onClose();
  };

  const handleReportar = () => {
    setMostrarReporte(true);
  };

  return (
    <div id="contenedor-tarjeta" className="tarjeta">
      <button className="cerrar-tarjeta" onClick={cerrarTarjeta}>
        X
      </button>
      <div className="izquierda">
        <h1>Contenedor</h1>
        <div className="info" style={{ flex: 1, maxWidth: '75%' }}>
          <TarjetasInformacion
            imagen={pin}
            titulo='Ubicación'
            sujeto={props.ubicacion}
            mostrarBarraProgreso={false}
          />
          <TarjetasInformacion
            imagen={tipo}
            titulo='Tipo'
            sujeto={props.tipo}
            mostrarBarraProgreso={false}
          />
          <TarjetasInformacion
            imagen={props.llenado}
            titulo='Lleno al'
            sujeto={props.porcentaje}
            mostrarBarraProgreso={true}
          />
        </div>
      </div>
      <div className="imagen-referencia">
        <img className="img-referencia" src={referencia} alt="ubicacion de bote.png" />
      </div>
      {!mostrarReporte && (
        <div className="reportar-contenedor" style={{ alignSelf: 'flex-end' }}>
          <button className="btn-reportar" onClick={handleReportar}>
            Reportar contenedor
          </button>
        </div>
      )}
      {mostrarReporte && (
        <div className="reporte-contenedor">
          <TarjetaReporte estado="Dañado" imagen={dañado} />
          <TarjetaReporte estado="Lleno" imagen={lleno} />
          <TarjetaReporte estado="Ausente" imagen={ausente} />
        </div>
      )}
    </div>
  );
}
