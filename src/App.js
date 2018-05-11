import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
