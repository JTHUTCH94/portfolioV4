import React, { Component } from 'react';
import Favicon from 'react-favicon';
//import './App.css';
import Main from './components/Main';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Favicon url="https://s8.postimg.cc/j21olw3np/profile-pic.jpg" />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
