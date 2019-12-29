import React from 'react';
import PatDoc from './patientDoc.js'
import VertAl from './vertalign.js'
import Logos from './logos.js';
import Citycard from './city-card.js';
import { Header } from './header.js';
import Dropdown from './dropdown.js';
import Selectfor from './selectfor.js';
import {cityData,vertAlData,obj} from './Data.js';
import Footer from './footer.js' ;
import Before from './before.js' ;
import Logoand from './logoand.js';
import Parlogos from './parlogos.js';
import Leftlogo from './leftLogo.js'

function App() {
  return (
    <div className="App">
      <Header><Dropdown /> </Header>
      <Logoand/>

      <section id="firstarticle">

        <PatDoc for='for patients' select = {<Selectfor/>} ide={"imgcontainer1"} />
        <PatDoc for='for doctors' select = "" ide = {"imgcontainer2"}/>

      </section>
      <Parlogos/>
      <section id="secbiglogoSec">
        <div id="secbiglogo">

        <Leftlogo/>
          <div id="rightlogo">
            {vertAlData.map((el) => <VertAl styleName={el.styleName} source={el.src} srcset={el.srcset} />)}

          </div>
        </div>
      </section>
      <Before/>

      <section id="city">
        {cityData.map((el) => <Citycard src={el.src} srcSet={el.srcSet} cityName={el.cityName} />)}
      </section>
      <Footer/>
    </div>
  )
}



export default App;






