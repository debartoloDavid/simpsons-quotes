
import React, { Component } from "react";

class Character extends Component {
 
  
  constructor(props) {
    super(props);
    this.state = {
      quotes: null
    };

  }
 
  componentDidMount() {

    this.handleClick();
  }
  
  handleClick() {

    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
      .then(response => response.json())
      .then(data => this.setState({ quotes: data[3] }));
  }

  render() {

    
    const quoteObj = this.state.quotes;
   
    if (!quoteObj) {
      return <div>Wait a moment</div>;
    }
  
    return (
      <div>
          <div className="size">
            <div>
                <button className="random-quote" onClick={() => this.handleClick()}>
                    random
                </button>
            </div>
            <img src={quoteObj.image} alt="simpsons" />
            <blockquote>
            <p>{quoteObj.quote}</p>
            </blockquote>
            <cite>– {quoteObj.character} </cite>
          </div>
      </div>
    );
  }
}

export default Character;
