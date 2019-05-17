import React from 'react';
import Twitter from './Twitter';

const Share=(props)=>{
  return(
  <div className="section__collapse">
    <div>
      <button type="submit" className="share__button-create" onClick={props.fetchNewResponse}>
        <i className="far fa-address-card card-icon"></i>Crear tarjeta
      </button>
      <div className="errorMsg"></div>
      <div className="loading hidden">
        <img className="loading__img" src="assets/images/loading.gif" alt="Loading gif"/>
      </div>
    </div>
    <Twitter cardData={props.cardData}/>
  </div>
  )
}

export default Share;
