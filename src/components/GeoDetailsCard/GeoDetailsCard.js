import React from 'react';
import './GeoDetailsCard.scss';
import LoaderIcon from '../../assets/loader.png';

function GeoDetailsCard({ geoDetails, loading }) {
  const { ip, isp } = geoDetails;
  const { city, region, postalCode, timezone } = geoDetails.location;
  return (
    <div className="geo-details">
      <div className="geo-details__inner">
        <div className="geo-details__section">
          <p className="geo-details__section-header">IP ADDRESS</p>
          {!loading ? (
            <p className="geo-details__section-text">{ip}</p>
          ) : (
            <img
              className="geo-details__loader-icon"
              src={LoaderIcon}
              alt="loading-icon"
            />
          )}
        </div>

        <div className="geo-details__border"></div>

        <div className="geo-details__section">
          <p className="geo-details__section-header">LOCATION</p>
          {!loading ? (
            <p className="geo-details__section-text">{`${city}, ${region} ${postalCode}`}</p>
          ) : (
            <img
              className="geo-details__loader-icon"
              src={LoaderIcon}
              alt="loading-icon"
            />
          )}
        </div>

        <div className="geo-details__border"></div>

        <div className="geo-details__section">
          <p className="geo-details__section-header">TIMEZONE</p>
          {!loading ? (
            <p className="geo-details__section-text">UTC {timezone}</p>
          ) : (
            <img
              className="geo-details__loader-icon"
              src={LoaderIcon}
              alt="loading-icon"
            />
          )}
        </div>

        <div className="geo-details__border"></div>

        <div className="geo-details__section">
          <p className="geo-details__section-header">ISP</p>
          {!loading ? (
            <p className="geo-details__section-text">{isp}</p>
          ) : (
            <img
              className="geo-details__loader-icon"
              src={LoaderIcon}
              alt="loading-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GeoDetailsCard;
