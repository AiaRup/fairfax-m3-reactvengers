/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, { Component } from 'react';
// import Home from './components/Home/Home';
import Card from './components/Card/Card';
import './stylesheets/App.scss';

// const INFOLANDING = {
//   title: 'Crea tu tarjeta de visita',
//   description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
//   iconsArr: ['Diseña', 'Rellena', 'Comparte'],
//   btnText: 'comenzar',
//   teamName: 'ReactVengers'
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // defaultUser: {
      //   name: 'nombre apellido',
      //   job: 'Front-end developer',
      //   photo: imageUrlBase,
      //   palette: 1,
      //   email: '',
      //   phone: '',
      //   linkedin: '',
      //   github: ''
      // },
      userProfile: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: 1
      }
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(value, id) {
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userProfile };
      newUser[id] = value;
      return { userProfile: newUser };
    });
  }

  render() {
    return (
      // <Home teamName={INFOLANDING.teamName} btnText={INFOLANDING.btnText} iconsArr={INFOLANDING.iconsArr} description={INFOLANDING.description} title={INFOLANDING.title} />
      <Card user={this.state.userProfile} updateUser={this.updateUser} />
    );
  }
}

export default App;
