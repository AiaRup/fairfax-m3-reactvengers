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
      userProfile: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: 1
      },
      iconsStateArr: [
        { id: 'email', isVisible: false },
        { id: 'phone', isVisible: false },
        { id: 'linkedin', isVisible: false },
        { id: 'github', isVisible: false }
      ]
    };
    this.updateUser = this.updateUser.bind(this);
    this.changeIconState = this.changeIconState.bind(this);
  }

  updateUser(value, id) {
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userProfile };
      newUser[id] = value;
      // change state of icon visibility
      // this.changeIconState(value, id);
      return { userProfile: newUser };
    }, () => { this.changeIconState(value, id); });
  }

  changeIconState(value, id) {
    if (id !== 'name' && id !== 'job') {
      // find the icon with the id provided
      const iconState = this.state.iconsStateArr.find((icon) => icon.id === id);
      const index = this.state.iconsStateArr.findIndex((icon) => icon.id === id);
      // change the property isVisible of this icon object
      iconState.isVisible = value ? true : false;
      // update icons state
      this.setState((prevState, props) => {
        const newArr = [...this.state.iconsStateArr];
        // create new array and add the new icon object
        newArr.splice(index, 1, iconState);
        return { iconsStateArr: newArr };
      });
    }
  };

  render() {
    const { userProfile, iconsStateArr } = this.state;

    return (
      // <Home teamName={INFOLANDING.teamName} btnText={INFOLANDING.btnText} iconsArr={INFOLANDING.iconsArr} description={INFOLANDING.description} title={INFOLANDING.title} />
      <Card user={userProfile} updateUser={this.updateUser} iconsStateArr={iconsStateArr}/>
    );
  }
}

export default App;
