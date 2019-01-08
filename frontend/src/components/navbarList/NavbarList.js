import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './NavbarList.css'; 

//create navbar component to be added to ul in header
//each li element will be a clickabe image of team's logo
class NavbarList extends Component{
    render(){
        return(
            <li >
                 <Link to = {this.props.division}> <strong> {this.props.division} </strong> </Link>
            </li>
        );
    }
}

export default NavbarList;
