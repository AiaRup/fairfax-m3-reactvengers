import React from 'react';
import Twitter from './Twitter';
import loadingGif from '../../../images/loading.gif';

const Share = ({ isLoading, cardData, fetchNewResponse, isError }) => {
  return (
    <div className="section__collapse">
      {/* <div> */}
      <button type="submit" className="share__button-create" onClick={fetchNewResponse}>
        <i className="far fa-address-card card-icon" />
        Crear tarjeta
      </button>
      {isError && <div className="errorMsg">Error</div>}
      {isLoading ? (
        <div className="loading">
          <img className="loading__img" src={loadingGif} alt="Loading gif" />
        </div>
      ) : (
        <Twitter cardData={cardData} />
      )}

      {/* </div> */}
    </div>
  );
};

export default Share;
