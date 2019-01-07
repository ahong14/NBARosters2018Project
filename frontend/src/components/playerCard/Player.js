import React , {Component} from 'react';
import '../playerCard/Player.css';


class Player extends Component{
    render(){
        return(
            <div className="card medium playerCard col s3">
                <div className="cardImage">
                    <img src= {this.props.playerImage}/>
                </div>

                <div className="card-content">
                    <p> <strong> Name: </strong> {this.props.playerName} </p>
                    <p> <strong> Position: </strong> {this.props.position} </p>
                    <p> <strong> College: </strong> {this.props.college} </p>
                </div>
            </div>
        );
    }
}

export default Player;
