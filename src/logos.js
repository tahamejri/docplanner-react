import React, { Component } from 'react'

export default class Logos extends Component {
    render() {
        return (
            <li>
              <a href={this.props.href} target="_blank">
                <svg xmlns={this.props.svg} width="200" height="32" viewBox="0 0 200 32">
                  <path d={this.props.path}></path>
                </svg>
              </a>
            </li>
        )
    }
}

