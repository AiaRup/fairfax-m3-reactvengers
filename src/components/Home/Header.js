import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  shouldComponentUpdate (nextProps) {
    return this.props === nextProps;
  }

  render () {
    return (
      <header className="page__header">
        <div className="wrapper">
          <div className="header__logo">
          <Link className="header__link" to="/home"><h1 className="header__logo-img">Awesome profile cards</h1></Link>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
