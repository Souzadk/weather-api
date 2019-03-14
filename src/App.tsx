import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="full-width" id="bg-gradient">
        <header>
          <Menu></Menu>
        </header>
        <Hero></Hero>
        <About></About>
      </div>
    );
  }
}

export default App;
