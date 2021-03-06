import React , {Component} from 'react';
import axios from 'axios';
import TeamHeader from '../teamHeader/TeamHeader';
import '../teamPages/TeamPage.css';

class TeamPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            teams:{}, //object to map TID to team information
            pacific: [9,12,13,23,25], //array of TIDs for pacific division
            northwest: [7, 17, 20, 24, 28],
            southwest: [6, 10, 14, 18, 26],
            central: [4, 5, 8, 11, 16],
            atlantic: [1, 2, 19, 22, 27],
            southeast: [0, 3, 15, 21, 29],
            teamComponents: [] //array of TeamHeader components to render
        };
        this.renderDivision = this.renderDivision.bind(this);
    }

    //based on which route clicked, render TeamHeaders for specific division
    renderDivision(division){
        var teams = [];
        //5 teams in each divison
        //iterate each array based on divison to obtain TIDs
        //extract team name, image source, and team ID from division array
        //push results into an array for rendering
        switch(division){
            case 'Pacific Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = Number(this.state.pacific[i]);
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;

            case 'Northwest Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = this.state.northwest[i];
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;
            case 'Southwest Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = this.state.southwest[i];
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;
            case 'Central Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = this.state.central[i];
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;
            case 'Southeast Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = this.state.southeast[i];
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;
            case 'Atlantic Division':
                for (let i = 0; i< 5; i++){
                    let currentTID = this.state.atlantic[i];
                    let currentName = this.state.teams[currentTID].name;
                    let currentLogo = this.state.teams[currentTID].source;
                    teams.push(<TeamHeader teamLogo = {currentLogo} teamName = {currentName} teamID = {currentTID} />);
                }
                return teams;
            default:
        }
    }

    //get list of teams
    componentDidMount(){
        const apiURL = '/api/teams';
        axios.get(apiURL)
            .then(res => {
                //API Response
                var teamData = res.data;
                //Current team object
                var currentTeamObject = {};

                ///for each team, add team name to teams object
                //when last team, set state
                for(let i =0; i< teamData.length; i++){
                    var currentTeam = "";
                    //construct team name by concatenating region and name
                    //"Atlanta + Hawks"
                    currentTeam = teamData[i].region + " " + teamData[i].name;

                    var teamObject = new Object;
                    teamObject.name = currentTeam;
                    teamObject.source = teamData[i].imgURL;

                    var tid = teamData[i].tid;
                    //map team name to imgURL
                    currentTeamObject[tid] = teamObject;

                    //last team reached
                    //set state of teams to component
                    if(i === teamData.length -1){
                        this.setState({
                            teams: currentTeamObject
                        });

                        //render TeamHeaders based on current division
                        //group teams based on matching TIDs within a division
                        let teams = this.renderDivision(this.props.divisionName);
                        //set state of team components to matching teams based on division name
                        this.setState({
                            teamComponents: teams
                        });
                    } 
                }
            })
    }

    render(){
        const renderTeams = this.state.teamComponents;
        return(
            <div>
                <h1 className = "divisionTitle"> {this.props.divisionName} </h1>
                <div>
                    {renderTeams}
                </div>
            </div>
        );
    }
}

export default TeamPage;
