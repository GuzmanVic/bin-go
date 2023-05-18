import React, { useState, useEffect } from "react";

import verde from "../imagenes/verde.png";
import amarillo from "../imagenes/amarillo.png";
import rojo from "../imagenes/rojo.png";
import "../hojas de estilo/tarjetacontenedor.css";

export function Tarjeta2() {
    return (

        /*Contenedor-global va a abarcar toda la ventana disponible*/ 
        <div className="contenedor-global">
            {/*tarjeta es la base de lo que se va a observar */}
            <div className="tarjetaa">
                {/*cabecera contiene el titulo y el boton de cerrar tarjeta */}
                <section className="cabecera">
                    <h2>Contenedor</h2>
                    <button id="btn-cerrar-tarjeta">x</button>
                </section>
                {/*cuerpo contiene las tarjetas y la imagen de del contenedor */}
                <section id="cuerpo">
                    {/*Aqui van las tarjetas */}
                    <div className="cuerpo-izq">
                        <div className="ubicacion">

                        </div>
                        <div className="tipo">

                        </div>
                        <div className="lleno">

                        </div>
                    </div>
                    {/*Aqui va la imagen del contenedor */}
                    <div className="cuerpo-der">

                    </div>
                </section>
                {/* En esta seccion va el boton de reporte y los botones de reporte */}
                <section className="pie">

                </section>
                <button id="btn-reporte">reportar contenedor</button>
            </div>
        </div>

    );
}