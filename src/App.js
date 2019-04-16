import React, { Component } from 'react';
import Header from "./components/Header"
import Character from './components/Character';

import './App.css';


class App extends Component {
  

  render() {

    return (
      <div className="App"> 
        <Header  />
        <Character />
      </div>
    );
  }
}

export default App;
