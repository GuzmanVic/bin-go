
import GoogleMapReact, {Marker} from 'google-map-react';


export function Mapa2() {
    const ubicacion = {lat: 22.703202, lng: -99.010886 };
    const zoom = 19.3;
    const mapStyleId= 'satellite';
    const options = { mapTypeId: mapStyleId };
    const markerPosition2 = { lat: 22.703202, lng: -99.010886 };

    
    return (
      <div style={{ height: '700px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDYzfxFmMVH5Ewo6ZUn-Fb1ROC4fX2jKo4' }}
          defaultCenter={ubicacion}
          defaultZoom={zoom}
          defaultMapTypeId={mapStyleId}
          options={options}
        />

      </div>
    );
  }