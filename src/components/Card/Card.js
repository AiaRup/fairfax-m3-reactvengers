/* Creamos la base de los componentes del landing page */
import React from 'react';
import Header from '../Home/Header';
import Main from '../Card/Main';
import Footer from '../Home/Footer';


const Card = props => {
  // const { btnText, iconsArr, description, title, teamName } = props;
  return (
    <div className="page-card">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
};

export default Card;
