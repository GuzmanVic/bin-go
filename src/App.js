import "./App.css"; //CSS DE LA CLASE
import { Listaizq } from "./components/ListaIzquierda.js"; //Componente de contenedores
import { Listader } from "./components/ListaDerecha.js"; //Componente de contenedores
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
          <img
            className="mapa"
            src={require("./imagenes/mapa.jpeg")}
            alt="mapa"
          />
          <div className="barra-derecha">
            <Listader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
