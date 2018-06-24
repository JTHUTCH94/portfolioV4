import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Favicon from 'react-favicon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Favicon url="https://s8.postimg.cc/j21olw3np/profile-pic.jpg"/>
      <div>
        <Dashboard />
        <p className="divider"></p>
        <Skills />
        <p className="divider"></p>
        <Projects />
      </div>
      </div>
    );
  }
}

export default App;
