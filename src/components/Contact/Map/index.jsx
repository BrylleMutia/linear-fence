import React, { useState } from 'react'
import GoogleMapReact from "google-map-react";
import MapMarker from './MapMarker';


const Map = () => {
  const [center, setCenter] = useState({
    lat: 10.33,
    lng: 123.939,
  });
  const [zoom] = useState(18);

  return (
    <div style={{ height: "20em", width: "20em" }}>
      <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }} defaultCenter={center} defaultZoom={zoom}>
        <MapMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  )
}

export default Map;
