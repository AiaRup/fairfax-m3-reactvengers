/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, { Component } from 'react';
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import { fetchResponse } from './services/ResponseService';
import './stylesheets/App.scss';
import { imageUrlBase } from './data/defaultImage.js';
import { infoLanding } from './data/appData.js';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.imageLoad = React.createRef();
    this.state = {
      userProfile: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: imageUrlBase,
        palette: 1
      },
      cardData: '',
      isDefaultImage: true,
      iconsStateArr: [{ id: 'email', isVisible: false }, { id: 'phone', isVisible: false }, { id: 'linkedin', isVisible: false }, { id: 'github', isVisible: false }],
      isLoading: false,
      inputErrorArr: [],
      isError: false,
    };
    this.updateUser = this.updateUser.bind(this);
    this.changeIconState = this.changeIconState.bind(this);
    this.changeColorPalette = this.changeColorPalette.bind(this);
    this.clickLoadImage = this.clickLoadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
    this.fetchNewResponse = this.fetchNewResponse.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getIconState = this.getIconState.bind(this);
    this.checkUserData = this.checkUserData.bind(this);
  }

  componentDidMount() {
    this.getData();
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
    this.setState({ userProfile: newUser }, this.saveData);
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
    const newIconsArr = this.state.iconsStateArr.map(icon => {
      icon.isVisible = false;
      return icon;
    });
    this.setState({
      iconsStateArr: newIconsArr,
      userProfile: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: imageUrlBase,
        palette: 1
      },
      isDefaultImage: true,
      isError: false
    });
    localStorage.removeItem('userProfile');
  }

  fetchNewResponse(event) {
    event.preventDefault();
    this.setState({ isError: false });
    const valid = this.checkUserData();
    if (valid) {
      this.setState({ isLoading: true });
      fetchResponse(this.state.userProfile)
        .then(data => {
          this.setState({
            cardData: data.cardURL,
            isLoading: false
          });
        })
        .catch(error => {
          console.log(`Error on fetch: ${error}`);
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ isError: true });
    }
  }

  checkUserData() {
    const tempArr = [];
    for (let property in this.state.userProfile) {
      const currentProp = this.state.userProfile[property];
      if (currentProp === '' && property !== 'phone' && property !== 'photo') {
        tempArr.push(property);
        console.log(tempArr);
    }
    if (property === 'photo' && this.state.userProfile[property] === imageUrlBase) {
      tempArr.push(property);
    }
  }
    if (tempArr.length) {
      this.setState({inputErrorArr : tempArr})
      return false;
    }
    else {
      return true;
    }
  }


  saveData() {
    localStorage.setItem('userProfile', JSON.stringify(this.state.userProfile));
  }

  getData() {
    const localUser = JSON.parse(localStorage.getItem('userProfile'));
    if (localUser !== null) {
      this.setState({
        userProfile: localUser,
        isDefaultImage: localUser.photo ? false : true
      });
      this.getIconState(localUser);
    }
  }

  getIconState(localUser) {
    const newIconsArr = this.state.iconsStateArr.map(iconChuChu => {
      return { ...iconChuChu, isVisible: localUser[iconChuChu.id] ? true : false };
    });
    this.setState({ iconsStateArr: newIconsArr });
  }

  render() {
    const { userProfile, iconsStateArr, isDefaultImage, cardData, isLoading, isError, inputErrorArr } = this.state;
    return (
      <Switch>
        <Route exact path="/home" render={() => <Home teamName={infoLanding.teamName} btnText={infoLanding.btnText} iconsArr={infoLanding.iconsArr} description={infoLanding.description} title={infoLanding.title} />} />
        <Route
          exact
          path="/card"
          render={() => (
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
              isLoading={isLoading}
              isError={isError}
              inputErrorArr={inputErrorArr}
            />
          )}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default App;
