/* Creamos la base de los componentes del landing page */
import React from 'react';
import Header from '../Home/Header';
import Main from '../Card/Main';
import Footer from '../Home/Footer';

const Card = props => {
  const { user, updateUser } = props;
  return (
    <div className="page-card">
      <Header />
      <Main user={user} updateUser={updateUser} />
      <Footer />
    </div>
  );
};

export default Card;
