import React from 'react';
import ArrowIcon from '../../assets/icon-arrow.svg';
import './Header.scss';

function Header({ updateAddress, fetchGeoDetails }) {
  return (
    <div className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          fetchGeoDetails();
        }}
      >
        <input
          type="text"
          className="input-form__address-input"
          placeholder="Search for IP address or domain"
          onChange={updateAddress}
        />
        <button type="submit" className="input-form__submit-button">
          <img
            src={ArrowIcon}
            alt="Arrow icon"
            className="submit-button__arrow-icon"
          />
        </button>
      </form>
    </div>
  );
}

export default Header;
