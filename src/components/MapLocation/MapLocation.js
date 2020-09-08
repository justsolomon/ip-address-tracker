import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

function MapLocation({ coordinates }) {
  const { lat, lng } = coordinates;
  return (
    <Map center={[lat, lng]} zoom={13} styles={{ height: '350px' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>Yo it's me</Popup>
      </Marker>
    </Map>
  );
}

export default MapLocation;
