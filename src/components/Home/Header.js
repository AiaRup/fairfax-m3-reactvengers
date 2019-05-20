import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page__header">
      <div className="wrapper">
        <div className="header__logo">
        <Link className="header__link" to="/"><h1 className="header__logo-img">Awesome profile cards</h1></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
