import React, { Component } from 'react';
import Header from "./components/Header"
import Quotes from "./components/Quotes"
import './App.css';

class App extends Component {
  

  render() {

    return (
      <div className="App"> 
        <Header  />
        <Quotes />
      </div>
    );
  }
}

export default App;
