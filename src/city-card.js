import React, { Component } from 'react'

export default class Citycard extends Component {
    render() {
        return (
            <div>
            <div className="office">
          <a href="/career?&amp;loc=poland#jobs-offers" className="office__inner">
            <figure className="office__image">
              <img scr={this.props.src} srcSet= {this.props.srcSet} />
            </figure>
            <div className="office__desc">
              <span className="firstspanbutt">{this.props.cityName}</span>
              <span className="spanbutton">See openings</span>
            </div>
          </a>
        </div>
            </div>
        )
    }
}

let cityData = [{
    src: "https://www.docplanner.com/images/warsaw.png",
    srcSet:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
    cityName: "warsow"
},
{
    src: "https://www.docplanner.com/images/barcelona.png",
    srcSet:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
    cityName: "Barcelona"
},
{
    src: "https://www.docplanner.com/images/istanbul.png",
    srcSet:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
    cityName: "Istanbul"
},
{
    src: "https://www.docplanner.com/images/rome.png",
    srcSet:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",
    cityName: "Rome" 
},
{
    src: "https://www.docplanner.com/images/mexico-city.png",
    srcSet:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
    cityName: "Mexico City"
},
{
    src: "https://www.docplanner.com/images/curitiba.png",
    srcSet:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
    cityName: "Curitiba"
    
}
]