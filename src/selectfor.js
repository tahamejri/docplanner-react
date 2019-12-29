import React, { Component } from 'react'
import {contriesForSelect} from './Data.js'

export default class Selectfor extends Component {
    render() {
        return (
            <div>
            <select name="" id="">
                            <option defaultValue ={-1}>CHOOSE COUNTRY</option>
                            {contriesForSelect.map((el)=><option value="">{el}</option>)}
                            


                        </select>
            </div>
        )
    }
}

