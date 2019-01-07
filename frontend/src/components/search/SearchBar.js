import React , {Component} from 'react';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import {Grid, Card} from 'semantic-ui-react';
import SearchButton from '../searchButton/SearchButton';
import Player from '../playerCard/Player';


import '../search/SearchBar.css'; 
//search bar source from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

//state of search bar is current search query in text input
//changeSearchValue changes state of search bar to search query that was typed
//ref references the value of input to prop this.search
//onChange executes changeSearchValue to change state of search bar
//initialize constructor to pass method to other component

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            results: [],
            teams:{}
        };
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
    }

    //after component has been rendered, get team list
    //map TID to team names, region + name "Atlanta Hawks"
    //TID 0 maps to "Atlanta Hawks"
    componentDidMount(){
        axios.get('http://localhost:8080/teams')
            .then(res => {
                //API Response
                var teamData = res.data;
                console.log(teamData);
                //Current team object
                var currentTeamObject = {};

                for(let i =0; i< teamData.length; i++){
                    var currentTeam = "";
                    currentTeam = teamData[i].region + " " + teamData[i].name;
                    currentTeamObject[teamData[i].tid] = currentTeam 
                    this.setState({
                        teams: currentTeamObject
                    })
                }
            })
    }

    //change state of search query
    changeSearchValue(){
        this.setState({
            searchQuery: this.search.value
        });
    }

    //set state to empty string
    //pass search query value to backend
    //set state of results from backend
    searchClicked(){
        console.log(this.state.searchQuery);
        axios.get('http://localhost:8080/players/searchPlayers', {
            params: {
                search: this.state.searchQuery
            }
        }).then(res => {
            console.log(res);
            this.setState({
                searchQuery: '',
                results: res.data
            });
        });
    }

    render(){

        const players = this.state.results.map(result => {
            var currentTid = result.tid;
            return <Player key = {result._id} playerImage = {result.imgURL} playerName = {result.name} teamName = {this.state.teams[result.tid]} position = {result.pos} college = {result.college} height = {result.hgt} weight = {result.weight}/>
        });

        return(
            <div>
                <form id = "searchBar">
                    <input id = "searchInput" placeholder = "Search player by name, college, or position..." autoComplete = "off" ref = {input => this.search = input} onChange = {this.changeSearchValue}/>
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
