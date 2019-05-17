import React from 'react';
import Twitter from './Twitter';
const Share = () => {
  return (
    <div className="section__collapse">
      <div>
        <button type="submit" className="share__button-create">
          <i className="far fa-address-card card-icon" />Crear tarjeta
        </button>
        <div className="errorMsg" />
        <div className="loading hidden">
          <img className="loading__img" src="assets/images/loading.gif" alt="Loading gif" />
        </div>
      </div>
      <Twitter />
    </div>
  );
};

export default Share;
