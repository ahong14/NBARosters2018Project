import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './NavbarList.css'; 

//created navbar component to be added to ul in header
//each li element links to '/division'
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
