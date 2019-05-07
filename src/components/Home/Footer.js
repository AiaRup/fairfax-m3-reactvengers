import React from 'react';
import adalabLogo from '../../images/adalab-logo.png';

const Footer = props => {
  const { teamName } = props;
  return (
    <footer className="page__footer">
      <div className="wrapper">
        <div className="footer__copyright">
          <p className="footer__copyright-name">Awesome profile-cards ©2019</p>
          <p className="footer__wildcards">{teamName}</p>
        </div>
        <div className="footer__logo">
          {' '}
          <a href="https://adalab.es/" target="_blank">
            <img className="footer__logo-adalab" src={adalabLogo} alt="adalab logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
