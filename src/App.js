import "./App.css"; //CSS DE LA CLASE
import { Listaizq } from "./components/ListaIzquierda.js"; //Componente de contenedores
import { Listader } from "./components/ListaDerecha.js"; //Componente de contenedores

import {Mapa2} from "./components/Mapa2.js";
import {DatosUbicacion} from "./components/datos2.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="logo-nombre">
          <img
            className="logo"
            src={require("./imagenes/LogoPNG.png")}
            alt="logo.png"
          />
          <h1 className="Nombre">Bin-Go</h1>
        </div>
        <div className="componentes">
          <div className="barra-izquierda">
            <Listaizq />
          </div>
          <div className="centro">
            <Mapa2/>
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
