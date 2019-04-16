import React, { Component } from 'react';
import Header from "./components/Header"
import Character from './components/Character';

import './App.css';


import Quotes from "./components/Quotes"


class App extends Component {
  

  render() {

    return (
      <div className="App"> 
        <Header  />
        <Character />
        <Quotes />
      </div>
    );
  }
}

export default App;
