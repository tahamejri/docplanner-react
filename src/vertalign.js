import React, { Component } from 'react'


class VertAl extends Component {
    render() {
        return (
            
            <div className= {`vert-align  ${this.props.styleName }` }>
              <div>
                <img scr={this.props.source} srcSet={this.props.srcset} />
                <h3>Leader in 10&nbsp;countries</h3>
                <p>
                  Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile
                            </p>
              </div>
            </div>

            
        )
    }
}

export default VertAl ;

