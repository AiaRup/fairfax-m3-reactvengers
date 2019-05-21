/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, { Component } from 'react';
// import Home from './components/Home/Home';
import Card from './components/Card/Card';
import { fetchResponse } from './services/ResponseService';
import './stylesheets/App.scss';
import { imageUrlBase } from './data/defaultImage.js';
// import { infoLoading } from './data/appData.js';

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
    this.imageLoad = React.createRef();
    this.state = {
      userProfile: {},
      cardData: '',
      isDefaultImage: true,
      iconsStateArr: [{ id: 'email', isVisible: false }, { id: 'phone', isVisible: false }, { id: 'linkedin', isVisible: false }, { id: 'github', isVisible: false }]
    };
    this.defaultUser = {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: imageUrlBase,
      palette: 1
    }
    this.updateUser = this.updateUser.bind(this);
    this.changeIconState = this.changeIconState.bind(this);
    this.changeColorPalette = this.changeColorPalette.bind(this);
    this.clickLoadImage = this.clickLoadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
    this.fetchNewResponse = this.fetchNewResponse.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  updateUser(value, id) {
    this.setState(
      (prevState, props) => {
        const newUser = { ...prevState.userProfile };
        newUser[id] = value;
        return { userProfile: newUser };
      },
      () => {
        this.saveData();
        this.changeIconState(value, id);
      }
    );
  }

  changeIconState(value, id) {
    if (id !== 'name' && id !== 'job') {
      const newIconsArr = this.state.iconsStateArr.map(icon => {
        if (icon.id === id) {
          icon.isVisible = value ? true : false;
        }
        return icon;
      });
      this.setState({ iconsStateArr: newIconsArr });
    }
  }

  changeColorPalette(id) {
    const newUser = { ...this.state.userProfile };
    newUser.palette = id;
    this.setState({ userProfile: newUser });
  }

  clickLoadImage() {
    this.imageLoad.current.click();
  }

  getImage(event) {
    const myFile = event.currentTarget.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onload = () => {
      const newUser = { ...this.state.userProfile };
      newUser.photo = reader.result;
      this.setState({ userProfile: newUser, isDefaultImage: false });
      this.saveData();
    };
  }
  resetInfo() {
    const userReset = {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: imageUrlBase,
      palette: 1
    };
    const newIconsArr = this.state.iconsStateArr.map(icon => {
      icon.isVisible = false;
      return icon;
    });
    this.setState({ iconsStateArr: newIconsArr, userProfile: userReset, isDefaultImage: true });
  }

  fetchNewResponse(event) {
    event.preventDefault();
    fetchResponse(this.state.userProfile).then(data => {
      this.setState({
        cardData: data.cardURL
      });
    });
  }

  saveData() {
    localStorage.setItem('userProfile', JSON.stringify(this.state.userProfile));
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const localUser = JSON.parse(localStorage.getItem('userProfile'));
    console.log(localUser);
    if (localUser !== null) {
      this.setState( {
          userProfile : localUser 
        })
    } else {
      this.setState({userProfile : this.defaultUser})
    }
  }

  render() {
    const { userProfile, iconsStateArr, isDefaultImage, cardData } = this.state;

    return (
      // <Home teamName={INFOLANDING.teamName} btnText={INFOLANDING.btnText} iconsArr={INFOLANDING.iconsArr} description={INFOLANDING.description} title={INFOLANDING.title} />
      <Card
        user={userProfile}
        updateUser={this.updateUser}
        iconsStateArr={iconsStateArr}
        selectPalette={this.changeColorPalette}
        imageLoad={this.imageLoad}
        clickLoadImage={this.clickLoadImage}
        getImage={this.getImage}
        isDefaultImage={isDefaultImage}
        resetInfo={this.resetInfo}
        cardData={cardData}
        fetchNewResponse={this.fetchNewResponse}
      />
    );
  }
}

export default App;
