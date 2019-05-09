/* Creamos la base de los componentes del landing page */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Home = props => {
  const { btnText, iconsArr, description, title, teamName } = props;
  return (
    <div className="page">
      <div className="page__container">
        <div className="page__subcontainer">
          <Header />
          <Main btnText={btnText} iconsArr={iconsArr} description={description} title={title} />
        </div>
      </div>
      <Footer teamName={teamName} />
    </div>
  );
};

Home.defaultProps = {
  title: 'Crea tu tarjeta de visita',
  description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
  iconsArr: ['Diseña', 'Rellena', 'Comparte'],
  btnText: 'comenzar',
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconsArr: PropTypes.arrayOf(PropTypes.string),
  btnText: PropTypes.string,
  teamName: PropTypes.string.isRequired
};

export default Home;
