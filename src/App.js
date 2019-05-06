import React, {Component} from 'react';
import adalabLogo from './images/adalab-logo.png';
import './stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="page__container">
          <div className="page__subcontainer">
            <header className="page__header">
              <div className="wrapper">
                <div className="header__logo"> <a href="index.html" className="header__link"><h1 className="header__logo-img">Awesome profile cards</h1></a></div>
              </div>
            </header>
            <main className="main__landing-page">
              <div className="main__landing">
                <div className="main__landing-info">
                  <h2 className="main__landing-title">Crea tu tarjeta de visita</h2>
                  <p className="main__landing-text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                </div>
                <div className="main__landing-menu">
                  <ul className="main__landing-list">
                    <li className="main__landing-item"><i className="far fa-object-ungroup"></i>Diseña</li>
                    <li className="main__landing-item"><i className="far fa-keyboard"></i>Rellena</li>
                    <li className="main__landing-item"><i className="fas fa-share-alt"></i>Comparte</li>
                  </ul>
                </div>
                <div className="main__landing-start"> <a href="createCard.html" className="main__landing-link">comenzar</a></div>
              </div>
            </main>
          </div>
          </div>
          <footer className="page__footer">
            <div className="wrapper">
              <div className="footer__copyright">
                <p className="footer__copyright-name">Awesome profile-cards ©2019</p>
                <p className="footer__wildcards">.Wildcards</p>
              </div>
              <div className="footer__logo"> <a href="https://adalab.es/" target="_blank"><img className="footer__logo-adalab" src={adalabLogo} alt="adalab logo"/></a></div>
            </div>
          </footer>
        </div>
    );
  }
}

export default App;
