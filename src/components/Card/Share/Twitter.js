import React from 'react';

const Twitter = props => {
  return (
    <React.Fragment>
      {props.cardData !== '' ? (
        <div className="share__hidden">
          <div>
            <p className="share__text">La tarjeta ha sido creada:</p>
            <div className="share__link-container">
              <a href={props.cardData} className="share__link" target="_blank" rel="noopener noreferrer">
                {props.cardData}
              </a>
            </div>
            <a href={props.cardData} className="share__button-twitter twitter-share-button" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter twitter-icon" />
              Compartir en twitter
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Twitter;
