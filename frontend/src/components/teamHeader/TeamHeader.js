import React , {Component} from 'react';
import Player from '../playerCard/Player';
import axios from 'axios';
import '../teamHeader/TeamHeader.css';

class TeamHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    };

    //get list of players for this team
    componentDidMount(){
        axios.get('http://localhost:8080/players/searchByTeam',{
            params:{
                tid: this.props.teamID
            }
        }).then(res =>{
            this.setState({
                results: res.data
            })
        })
    }

    render(){
        const players = this.state.results.map(result => {
            return <Player key = {result._id} playerImage = {result.imgURL} teamName = {this.props.teamName} playerName = {result.name} position = {result.pos} college = {result.college} height = {result.hgt} weight = {result.weight}/>
        });

        return(
            <div>
                <div className = "teamHeader">
                    <img id = "teamLogo" src = {this.props.teamLogo}/>
                    <h1> {this.props.teamName} </h1>
                </div>

                <div className = "row">
                   {players}
                </div>

            </div>
        );
    }
}

export default TeamHeader;
