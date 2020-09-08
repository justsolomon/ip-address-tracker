import L from 'leaflet';

const LocationIcon = new L.Icon({
  iconUrl: require('../../assets/icon-location.svg'),
  iconRetinaUrl: require('../../assets/icon-location.svg'),
  iconSize: new L.Point(45, 60),
  className: 'location-icon',
});

export default LocationIcon;
