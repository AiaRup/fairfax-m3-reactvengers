/* Creamos la base de los componentes del landing page */
import React from 'react';
import Header from '../Home/Header';
import Main from '../Card/Main';
import Footer from '../Home/Footer';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Card = props => {
  const { isError, closeModal } = props;
  return (
    <div className="page-card">
      <Header />
      <Main {...props} />
      <Footer />
      {isError && <Modal closeModal={closeModal} />}
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  iconsStateArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectPalette: PropTypes.func.isRequired,
  imageLoad: PropTypes.object.isRequired,
  clickLoadImage: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  resetInfo: PropTypes.func.isRequired,
  isDefaultImage: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Card;
