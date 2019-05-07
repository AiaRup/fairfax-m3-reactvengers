/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, { Component } from 'react';
import Home from './components/Home/Home';
import './stylesheets/App.scss';

const INFOLANDING = {
  title: 'Crea tu tarjeta de visita',
  description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
  iconsArr: ['Diseña', 'Rellena', 'Comparte'],
  btnText: 'comenzar',
  teamName: 'ReactVengers'
};

class App extends Component {
  render() {
    return (
      <Home teamName={INFOLANDING.teamName} btnText={INFOLANDING.btnText} iconsArr={INFOLANDING.iconsArr} description={INFOLANDING.description} title={INFOLANDING.title} />
      // <Card/>
    );
  }
}

export default App;
