import React, { Component } from 'react'

const Example = function (props) {
    console.log(props)
    return <h1>hello</h1>
}



// class NavBar extends Component {
//      state = {
//      listElements : [{text:'Taha',link:'http://github.com'},{text:'Home',link:'http://www.google.com'},{text:'Profile',link:'http://www.facebook.com'}]
//      }
//     listsHTML = this.state.listElements.map((element,i) =>  <li className ='nav-item' key = {i}> <a className = 'navbar-brand' href={element.link}>{element.text}</a> </li> ) 

//     render() {
//         return (
//             <div className='navbar navbar-expand-lg navbar-light bg-light justify-content-end'>
//                 <ul className='navbar-nav'>
//                     {this.listsHTML}
//                     {<DropDownLi/>}
//                 </ul>
//             </div>
//         )
//     }

// }

class DropDownLi extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://google.com">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        )
    }
}

export {
    NavBar, DropDownLi

}

class Navbar extends Component {
    render() {
        return (
        <div>

            <div id="logoheader"><img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/></div>
            
            <div id="headerlist">
                <ul>
                    <li><a id="firstliheader" href=""> About us</a></li>
                    <li><a href="">Career</a></li>
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
                </ul></div>
        </div>
        )
    }
}







    