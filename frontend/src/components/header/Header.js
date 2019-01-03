import React, {Component} from 'react';
import NavbarList from '../navbarList/NavbarList';
import header from '../header/Header.css';

import nbaLogo from '../team_logos/nbalogo.jpg';

//header component consists of navbar
//navbar contains page logo and ul
//ul consists of NavbarList components

class Header extends Component{
    render(){
        return(
            <nav>
                <div className = "nav-wrapper">
                    <a href = "#" className = "brand-logo"> <img id = "logo" src = {nbaLogo}/>  </a>
                    <ul className = "left hide-on-med-and-down"> 
                        <NavbarList division = "Pacific"/>
                        <NavbarList division = "Northwest"/>
                        <NavbarList division = "Southwest"/>
                        <NavbarList division = "Central"/>
                        <NavbarList division = "Atlantic"/>
                        <NavbarList division = "Southeast"/>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
