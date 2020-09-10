import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import GeoDetailsCard from '../../components/GeoDetailsCard/GeoDetailsCard';
import MapLocation from '../../components/MapLocation/MapLocation';
import axios from 'axios';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [geoDetails, setGeoDetails] = useState({ location: {} });
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [loadStatus, setLoadStatus] = useState(true);
  const { city, region } = geoDetails.location;

  const fetchGeoDetails = () => {
    setLoadStatus(true);

    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_A8mVOj6Sj9mWMtcXbCJYe7594SdxL&ipAddress=${ipAddress}`
      )
      .then((response) => {
        const { location } = response.data;
        setGeoDetails(response.data);
        setCoordinates({ lat: location.lat, lng: location.lng });
        setLoadStatus(false);
      })
      .catch((err) => {
        setLoadStatus(false);
        window.alert(err);
      });
  };

  useEffect(fetchGeoDetails, []);

  return (
    <div className="App">
      <Header
        updateAddress={(e) => setIpAddress(e.target.value)}
        fetchGeoDetails={fetchGeoDetails}
      />
      <GeoDetailsCard geoDetails={geoDetails} loading={loadStatus} />
      <MapLocation coordinates={coordinates} city={city} region={region} />
    </div>
  );
}

export default App;
