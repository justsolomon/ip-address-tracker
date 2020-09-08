import React from 'react';

function GeoDetailsCard({ geoDetails }) {
  const { ip, isp } = geoDetails;
  const { city, region, postalCode, timezone } = geoDetails.location;
  return (
    <div className="geo-details">
      <div className="geo-details__section">
        <p className="geo-details__section-header">IP ADDRESS</p>
        <p className="geo-details__section-text">{ip}</p>
      </div>
      <div className="geo-details__section">
        <p className="geo-details__section-header">LOCATION</p>
        <p className="geo-details__section-text">{`${city}, ${region} ${postalCode}`}</p>
      </div>
      <div className="geo-details__section">
        <p className="geo-details__section-header">TIMEZONE</p>
        <p className="geo-details__section-text">UTC {timezone}</p>
      </div>
      <div className="geo-details__section">
        <p className="geo-details__section-header">ISP</p>
        <p className="geo-details__section-text">{isp}</p>
      </div>
    </div>
  );
}

export default GeoDetailsCard;
