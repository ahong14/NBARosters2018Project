import React, {Component} from 'react';
import './NavbarList.css'; 
//create navbar component to be added to ul in header
//each li element will be a clickabe image of team's logo
class NavbarList extends Component{
    render(){
        return(
            <li>
                 {this.props.division} 
            </li>
        );
    }
}

export default NavbarList;
