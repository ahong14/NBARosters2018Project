import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NavbarList from '../navbarList/NavbarList';
import '../header/Header.css';
import nbaLogo from '../team_logos/nbalogo.jpg';

//header component consists of fixed navbar
//navbar contains page logo and ul
//ul consists of NavbarList components
//clicking logo redirects back to home page

class Header extends Component{
    render(){
        return(
            <div className = "navbar-fixed">
                <nav>
                    <div id = "mainNav" className = "nav-wrapper">
                        <Link to = "/" className = "brand-logo"> <img id = "logo" src = {nbaLogo}/>  </Link>
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
            </div>
        );
    }
}

export default Header;
