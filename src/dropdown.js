import React, { Component } from 'react'

export default class Dropdown extends Component {
                render() {
                    return (
                    
                        <li id="one"><a href="">Departments</a>
                          <div className="dropDown">
                            <ul>
                              <li><a href="">Marketing and PR</a></li>
                              <li><a href="">Constumer support & Sales</a></li>
                              <li><a href="">IT,Product,Design & UX</a></li>
                              <li><a href="">Finance & Administration</a></li>
                              <li><a href="">HR & more</a></li>
                            </ul>
                          </div>
                        </li>  
                        
                    )
                }
            }
        