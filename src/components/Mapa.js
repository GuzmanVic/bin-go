import React, { useState, useRef, useEffect } from 'react';
import "../hojas de estilo/Mapa.css";

export function Mapa() {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
  googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYzfxFmMVH5Ewo6ZUn-Fb1ROC4fX2jKo4&callback=initMap';
  window.document.body.appendChild(googleMapsScript);
  
  googleMapsScript.addEventListener('load', () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 22.703202, lng: -99.010886 },
      zoom: 19.3, 
      mapTypeId: 'satellite'
    });
    setMap(map);
  });
  }, []);
  return (
    <div ref={mapRef} style={{ height: '700px', width: '100%' }}></div>
  );
}

