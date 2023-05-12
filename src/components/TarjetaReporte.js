import React from "react";
import "../hojas de estilo/tarjetaReporte.css";
export function TarjetaReporte(props) {
    const handleClick = () => {
        props.onClick(); // Llama a la función onClick pasada como prop desde el componente padre
    };

    return (
        <>
            <div className="reportCard" onClick={handleClick}>
                <h2>{props.estado}</h2>
                <div className="imgReport">
                    <img className="imagen-report" src={props.imagen} alt="pin.png" />
                </div>
            </div>
        </>
    );
}
