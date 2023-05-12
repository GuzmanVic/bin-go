import React, { useState } from "react";
import "../hojas de estilo/tarjetaInfo.css";
import pin from "../imagenes/amarillo.png";
export function TarjetasInformacion(props) {
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
            </div>
        </>

    );
}