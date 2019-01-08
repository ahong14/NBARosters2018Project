import React , {Component} from 'react';
import '../teamPages/TeamPage.css';

class TeamPage extends Component{
    render(){
        return(
            <div>
                <h1 className = "divisionTitle"> {this.props.divisionName} </h1>
            </div>
        );
    }
}

export default TeamPage;
