import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Main = props => {
  // Destructuring the props, to don't reuse props.title, props.btnText...
  const { btnText, iconsArr, description, title } = props;
  return (
    <main className="main__landing-page">
      <div className="main__landing">
        <div className="main__landing-info">
          <h2 className="main__landing-title">{title}</h2>
          <p className="main__landing-text">{description}</p>
        </div>
        <div className="main__landing-menu">
          <ul className="main__landing-list">
            <li className="main__landing-item">
              <i className="far fa-object-ungroup" />
              {iconsArr[0]}
            </li>
            <li className="main__landing-item">
              <i className="far fa-keyboard" />
              {iconsArr[1]}
            </li>
            <li className="main__landing-item">
              <i className="fas fa-share-alt" />
              {iconsArr[2]}
            </li>
          </ul>
        </div>
        <Link className="main__landing-start" to="/card">{btnText}</Link>
      </div>
    </main>
  );
};

Main.defaultProps = {
  title: 'Crea tu tarjeta de visita',
  description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
  iconsArr: ['Diseña', 'Rellena', 'Comparte'],
  btnText: 'comenzar'
};

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconsArr: PropTypes.arrayOf(PropTypes.string),
  btnText: PropTypes.string
};

export default Main;
