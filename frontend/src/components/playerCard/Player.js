import React , {Component} from 'react';
import '../playerCard/Player.css';

//player component contains player image and player info
//using MaterializeCSS cards
class Player extends Component{
    render(){
        return(
            <div className="card playerCard col s3">
                <div className="cardImage">
                    <img src= {this.props.playerImage}/>
                </div>

                <div className="card-content">
                    <p> <strong> Name: </strong> {this.props.playerName} </p>
                    <p> <strong> Team: </strong> {this.props.teamName} </p>
                    <p> <strong> Position: </strong> {this.props.position} </p>
                    <p> <strong> College: </strong> {this.props.college} </p>
                    <p> <strong> Height: </strong> {this.props.hgt} </p>
                    <p> <strong> Weight: </strong> {this.props.weight} </p>
                </div>
            </div>
        );
    }
}

export default Player;
