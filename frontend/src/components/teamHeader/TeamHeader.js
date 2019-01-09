import React , {Component} from 'react';
import '../teamHeader/TeamHeader.css';

class TeamHeader extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className = "teamHeader" >
                <img id = "teamLogo" src = {this.props.teamLogo}/>
                <h1> {this.props.teamName} </h1>
            </div>
        );
    }
}

export default TeamHeader;
