import React from "react";
import { Contenedor } from "./Contenedor.js";
import "../App.css"; //CSS DE LA CLASE

export function Listaizq() {
  return (
    <>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="Mixto" />
      <Contenedor ubicacion="Edificio 1" porcentaje="90%" tipo="Mixto" />
      <Contenedor ubicacion="Pasilo Exterior" porcentaje="60%" tipo="PET" />
      <Contenedor ubicacion="Edificio 2" porcentaje="55%" tipo="Orgánicos" />
      <Contenedor ubicacion="CC2" porcentaje="35%" tipo="Inorgánicos" />
      <Contenedor
        ubicacion="Pasillo Cafetería"
        porcentaje="100%"
        tipo="Mixto"
      />
      <Contenedor ubicacion="Cafetería" porcentaje="82%" tipo="PET" />
    </>
  );
}
