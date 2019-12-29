import React, { Component } from 'react'
import Logos from './logos.js'
import {obj} from './Data.js'
export default class Parlogos extends Component {
    render() {
        return (
            <div>
            <section id="parlogo">
        <div id="paraglogos"><h1>We are a global company with local culture</h1></div>
        <div id="logos">
          <ul className="brands__logos">
            {obj.map((el, i) =>
              <Logos href={el.href} path={el.path} svg={el.svg} />
            )}

          </ul>
        </div>
      </section>
            </div>
        )
    }
}
