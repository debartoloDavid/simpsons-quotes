import React from "react"
import logo from '../logo.svg';

import "./Header.css"

class Header extends React.Component{

        state = {
            working: false
        }

        handelClick =(event) => {
            this.setState({ working: ! this.state.working})
        }
        
        render() {
        
        return (
            <header isWorking={this.state.working} className="header-header">
                <img src={logo} className={ this.state.working ? 'header-logo-fast' : 'header-logo'} alt="logo" />
                <p>
                Generating a React Project for Simpsons Quotes
                </p>
                <input className="btn" type="button" onClick={this.handelClick} />
                <a
                className="header-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                
            </header>
        )
    }
}

export default Header