/* Creamos la base de los componentes del landing page */
import React from 'react';
import Header from '../Home/Header';
import Main from '../Card/Main';
import Footer from '../Home/Footer';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="page-card">
      <Header />
      <Main {...props} />
      <Footer />
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  iconsStateArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectPalette: PropTypes.func.isRequired
};

export default Card;
