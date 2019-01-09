import React , {Component} from 'react';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import {Grid, Card} from 'semantic-ui-react';
import SearchButton from '../searchButton/SearchButton';
import Player from '../playerCard/Player';
import '../search/SearchBar.css'; 
//search bar source from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

class SearchBar extends Component{
    //initialize constructor to pass method to other component
    constructor(props){
        super(props);
        this.state = {
            playerQuery: '', //what user types in search player
            collegeQuery: '', //what user types in search college
            results: [], //API response of players based on search queries
            teams:{} //API response of team information
        };
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
    }

    //after component has been rendered, get team list via network call
    //map TID to team names, region + name "Atlanta Hawks"
    //TID 0 maps to "Atlanta Hawks"
    componentDidMount(){
        const apiURL = 'http://localhost:8080/teams';
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
                    //construct team name, "Atlanta + Hawks"
                    currentTeam = teamData[i].region + " " + teamData[i].name;
                    //map TID to team name
                    currentTeamObject[teamData[i].tid] = currentTeam;
                    //if last team, set state of teams to currentTeamObject
                    if(i == teamData.length -1){
                        this.setState({
                            teams: currentTeamObject
                        })
                    } 
                }
            })
    }

    //change state of search query for both player and college search
    changeSearchValue(){
        this.setState({
            playerQuery: this.searchPlayer.value,
            collegeQuery: this.searchCollege.value
        });
    }

    //set state to empty string
    //pass search query value to backend
    //set state of results from backend
    searchClicked(){
        const apiURL = 'http://localhost:8080/players/searchPlayers';
        axios.get(apiURL , {
            params: {
                playerSearch: this.state.playerQuery,
                collegeSearch: this.state.collegeQuery
            }
        }).then(res => {
            if(res.data.length === 0){
                alert("No results");
            }

            this.setState({
                playerQuery: '',
                collegeQuery: '',
                results: res.data
            });
        });
    }


    //changeSearchValue changes state of search bar to search query that was typed
    //two search bars, one for player name, one for college name
    //ref references the value of input to prop this.search
    //onChange executes changeSearchValue to change state of search bar
    render(){
        const players = this.state.results.map(result => {
            var currentTid = result.tid;
            return <Player key = {result._id} playerImage = {result.imgURL} playerName = {result.name} teamName = {this.state.teams[result.tid]} position = {result.pos} college = {result.college} height = {result.hgt} weight = {result.weight}/>
        });

        return(
            <div>
                <form className = "searchBar">
                    <input className = "searchInput" placeholder = "Search player by name..." autoComplete = "off" ref = {input => this.searchPlayer = input} onChange = {this.changeSearchValue}/>
                </form>

                <form className = "searchBar">
                    <input className = "searchInput" placeholder = "Search player by college..." autoComplete = "off" ref = {input => this.searchCollege = input} onChange = {this.changeSearchValue}/>
                </form>

                <SearchButton click = {this.searchClicked}/>
    
                <div className = "row" id = "searchResults">
                    {players} 
                </div>
            </div>
        );
    }    
}

export default SearchBar;
