import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationIcon from '../../components/LocationIcon/LocationIcon';

function MapLocation({ coordinates, city, region }) {
  const { lat, lng } = coordinates;
  return (
    <Map center={[lat, lng]} zoom={13} style={{ height: '350px' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={LocationIcon}>
        <Popup>{`${city}, ${region}`}</Popup>
      </Marker>
    </Map>
  );
}

export default MapLocation;
