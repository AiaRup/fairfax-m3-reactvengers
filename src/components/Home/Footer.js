import React from 'react';
import PropTypes from 'prop-types';
import adalabLogo from '../../images/adalab-logo.png';

class Footer extends React.Component {

  shouldComponentUpdate (nextProps) {
    return this.props === nextProps;
  }

  render() {
    console.log('footer render')
    const { teamName } = this.props;
    return (
      <footer className="page__footer">
        <div className="wrapper">
          <div className="footer__copyright">
            <p className="footer__copyright-name">Awesome profile-cards ©2019</p>
            <p className="footer__wildcards">{teamName}</p>
          </div>
          <div className="footer__logo">
            <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">
              <img className="footer__logo-adalab" src={adalabLogo} alt="adalab logo" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

Footer.propTypes = {
  teamName: PropTypes.string
};

export default Footer;
