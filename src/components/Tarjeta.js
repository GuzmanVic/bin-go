import React, { useState, useEffect } from "react";
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
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [enviado, setMostrarEnviado] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [mostrarReporte, setMostrarReporte] = useState(false);
  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);

  useEffect(() => {
    if (mostrarConfirmacion) {
      setFadeOut(true);
    }
  }, [mostrarConfirmacion]);
  useEffect(() => {
    if (mostrarReporte) {
      setTimeout(() => {
        setMostrarAnimacion(true);
      }, 0);
    }
  }, [mostrarReporte]);

  const cerrarTarjeta = () => {
    props.onClose();
  };

  const handleReportar = () => {
    setMostrarReporte(true);
    setMostrarAnimacion(true);
  };

  const handleEnviarReporte = () => {
    setMostrarConfirmacion(true);
  };

  const handleCancelarReporte = () => {
    setMostrarConfirmacion(false);
    setFadeOut(false);
  };

  const handleConfirmarEnvio = () => {
    setMostrarReporte(false);
    setMostrarConfirmacion(false);
    setMostrarEnviado(true);
  };

  return (
    <div id="contenedor-tarjeta" className="tarjeta">
      <button className="cerrarTarjeta" onClick={cerrarTarjeta}>
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
      {mostrarReporte && !mostrarConfirmacion && (
        <div className={`reporte-contenedor ${mostrarAnimacion ? 'mostrar' : ''}`}>
          <TarjetaReporte estado="Dañado" imagen={dañado} onClick={handleEnviarReporte} />
          <TarjetaReporte estado="Lleno" imagen={lleno} onClick={handleEnviarReporte} />
          <TarjetaReporte estado="Ausente" imagen={ausente} onClick={handleEnviarReporte} />
        </div>
      )}
      {mostrarConfirmacion && (
        <div className="confirmacion-envio">
          <p>Se enviará el reporte</p>
          <div className="opciones-confirmacion">
            <button className="btn-cancelar" onClick={handleCancelarReporte}>
              <strong>
                Cancelar
              </strong>
            </button>
            <button className="btn-enviar" onClick={handleConfirmarEnvio}>
              <strong>
                Enviar
              </strong>
            </button>
          </div>
        </div>
      )}

      {enviado && (
        <div className="enviado">
          <button className="cerrarTarjeta" onClick={cerrarTarjeta}>
            X
          </button>
          <h1>¡Reporte enviado!</h1>
        </div>
      )}
    </div>
  );
}