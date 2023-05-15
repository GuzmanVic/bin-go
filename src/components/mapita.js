import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
/*import "../App.css";*/
import "../hojas de estilo/Mapita.css"
import location from "../data/location.json"
import datos from "../data/tsla.json"
import L from "leaflet";

const iconito = L.icon({
  iconUrl: require("../imagenes/pin.png"),
  iconSize: [45, 45],
});

export function Mapita() {
  return (
    <div style={{  height: '700px', width: '100%' }}>
      <MapContainer
        center={[22.703086518381053, -99.01126780406364]}
        zoom={17}
        
        /*minZoom={17}*/
        scrollWheelZoom={true}
      >

        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVzdWFyIiwiYSI6ImNsaGs4MWwxYzBwNTkzc21tdWMwanJ6engifQ.-HDHtcLlHR9PY1PUCcAlIQ"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          maxZoom={20}
        />

        {location.map(tsla =>(
          <Marker 
          key = {tsla.id} position={[tsla.latitud, tsla.longitud]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        ))}

        
      </MapContainer>
    </div>
  );
}
