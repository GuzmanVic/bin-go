import React, { useState } from "react";
import "./App.css";
import { Listaizq } from "./components/ListaIzquierda";
import { Listader } from "./components/ListaDerecha";
import { Mapa2 } from "./components/Mapa2";
import { Tarjeta } from "./components/Tarjeta";

function App() {
  const [tarjetaVisible, setTarjetaVisible] = useState(false);

  const abrirTarjeta = () => {
    setTarjetaVisible(true);
  };

  const cerrarTarjeta = () => {
    setTarjetaVisible(false);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        {/* Resto del código... */}
        <div className="componentes">
          <div className="barra-izquierda">
            <Listaizq />
          </div>
          <div className="centro">
            <Mapa2 />
            <div onClick={abrirTarjeta}>
              {tarjetaVisible && <Tarjeta onClose={cerrarTarjeta} />}
            </div>
          </div>
          <div className="barra-derecha">
            <Listader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
