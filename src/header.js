import React, { Component } from 'react'

export class Header extends React.Component {
    render(){
        return (
            <header>
        <div id="logoheader"><img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
        </div>
        <div id="headerlist">
          <ul>
            <li><a id="firstliheader" href=""> About us</a></li>
            <li><a href="">Career</a></li>
            {this.props.children}
          </ul></div>
      </header>
        )
    }
}







