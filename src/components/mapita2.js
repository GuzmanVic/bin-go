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
    <div style={{ height: '700px', width: '100%' }}>
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

        <Marker
          position={[22.703086518381053, -99.01126780406364]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.7032932443995, -99.0113406471128]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.703376371435176, -99.01107430702166]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.703224094438173, -99.01103044862369]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.70340559025781, -99.010542434475674]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.702641259117218, -99.01078852962003]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.70316425969624, -99.01047389330807]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.70364221285324, -99.01069737103317]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.703468984386376, -99.0114345335654]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

        <Marker
          position={[22.703415330512254, -99.0108468355253]} icon={iconito}>
          <Popup>
            Puro pinche bin-go. <br /> y no mamadas.
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}
