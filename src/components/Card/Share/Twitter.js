import React from 'react';

const Twitter = () => {
  return (
    <div className="share__hidden hidden">
      <p className="share__text">La tarjeta ha sido creada:</p>
      <div className="share__link-container" />
      <a href="https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20my%20business%20card" className="share__button-twitter twitter-share-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter twitter-icon" />Compartir en twitter
      </a>
    </div>
  );
};

export default Twitter;
