import React from 'react';
import Twitter from './Twitter';
import loadingGif from '../../../images/loading.gif';
import PropTypes from 'prop-types';


const Share = ({ isLoading, cardData, fetchNewResponse }) => {
  return (
    <div className="section__collapse">
      <button type="submit" disabled={isLoading} className={`share__button-create ${isLoading ? 'share__button-active' : ''}`} onClick={fetchNewResponse}>
        <i className="far fa-address-card card-icon" />
        Crear tarjeta
      </button>
      {isLoading ? (
        <div className="loading">
          <img className="loading__img" src={loadingGif} alt="Loading gif" />
        </div>
      ) : (
        <Twitter cardData={cardData} />
      )}
    </div>
  );
};

Share.propTypes = {
  isLoading : PropTypes.bool.isRequired,
  cardData : PropTypes.string.isRequired,
  fetchNewResponse: PropTypes.func.isRequired
}

export default Share;
