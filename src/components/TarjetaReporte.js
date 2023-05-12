import React from "react";
import "../hojas de estilo/tarjetaReporte.css";
export function TarjetaReporte(props) {
    return (
        <>
            <div className="reportCard">
                <h2>{props.estado}</h2>
                <div className="imgReport">
                    <img className="imagen-report" src={props.imagen} alt="pin.png" />
                </div>
            </div>
        </>
    );
}