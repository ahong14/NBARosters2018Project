import React, {Component} from 'react';
import './NavbarList.css'; 
//create navbar component to be added to ul in header
//each li element will be a clickabe image of team's logo
class NavbarList extends Component{
    render(){
        return(
            <li>
                 <strong> {this.props.division} </strong>
            </li>
        );
    }
}

export default NavbarList;
