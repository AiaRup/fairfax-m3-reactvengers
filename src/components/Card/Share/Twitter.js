import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const Twitter = ({cardData}) => {
  return (
    <Fragment>
      {cardData !== '' ? (
        <div className="share__hidden">
          <div>
            <p className="share__text">La tarjeta ha sido creada:</p>
            <div className="share__link-container">
              <a href={cardData} className="share__link" target="_blank" rel="noopener noreferrer">
                {cardData}
              </a>
            </div>
            <a href={`http://twitter.com/share?text=Check%20my%20awesome%20profile%20card%20👩🏼‍💻⚛%20&url=http://${cardData}&hashtags=reactvengers,adalabers,womenwhocode`} className="share__button-twitter twitter-share-button" rel="noopener noreferrer">
              <i className="fab fa-twitter twitter-icon" />
              Compartir en twitter
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

Twitter.propTypes = {
  cardData : PropTypes.string.isRequired
}

export default Twitter;

