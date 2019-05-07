/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, {Component} from 'react';
import Home from './components/Home/Home';
import './stylesheets/App.scss';

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
