/* Creamos la base de los componentes del landing page */
import React from 'react';
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

export default Home;
