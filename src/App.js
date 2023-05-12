
import "./App.css"; //CSS DE LA CLASE
import { Listaizq } from "./components/ListaIzquierda.js"; //Componente de contenedores
import { Listader } from "./components/ListaDerecha.js"; //Componente de contenedores
import { useState, useEffect } from "react";
import { Tarjeta } from "./components/Tarjeta";
import {Mapa2} from "./components/Mapa2.js";

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