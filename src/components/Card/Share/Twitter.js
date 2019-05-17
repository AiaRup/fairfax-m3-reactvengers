import React from 'react';

const Twitter = (props) => {
  return (
    <div className="share__hidden">
      {props.cardData !== '' ? (
        <div>
          <p className="share__text">La tarjeta ha sido creada:</p>
          <div className="share__link-container">{props.cardData}</div>
          <a
            href={props.cardData}
            className="share__button-twitter twitter-share-button"
            target="_blank" rel="noopener noreferrer"
          ><i className="fab fa-twitter twitter-icon"></i>Compartir en twitter</a>
        </div>)
        :
        ''
      }

    </div>
  )

}

export default Twitter;
