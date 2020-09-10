import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationIcon from '../../components/LocationIcon/LocationIcon';
import './MapLocation.scss';

function MapLocation({ coordinates, city, region }) {
  const { lat, lng } = coordinates;
  return (
    <Map zoomControl={false} center={[lat, lng]} zoom={16}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://github.com/justsolomon" target="_blank" rel="noopener noreferrer">Solomon</a>.'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={LocationIcon}>
        <Popup>{`${city}, ${region}`}</Popup>
      </Marker>
    </Map>
  );
}

export default MapLocation;
