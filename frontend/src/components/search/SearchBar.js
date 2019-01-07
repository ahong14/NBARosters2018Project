import React , {Component} from 'react';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import SearchButton from '../searchButton/SearchButton';


import '../search/SearchBar.css'; 
//search bar source from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

//state of search bar is current search query in text input
//changeSearchValue changes state of search bar to search query that was typed
//ref references the value of input to prop this.search
//onchange executes changeSearchValue to change state of search bar
//initialize constructor to pass method to other component

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchQuery: ''
        };
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
    }

    //change state of search query
    changeSearchValue(){
        this.setState({
            searchQuery: this.search.value
        });
    }

    //set state to empty string
    //TODO: pass search query value to backend
    searchClicked(){
        console.log(this.state.searchQuery);
        axios.get('http://localhost:8080/players/searchPlayers', {
            params: {
                search: this.state.searchQuery
            }
        }).then(res => {
            console.log(res);
            this.setState({
                searchQuery: ''
            });
        });
    }

    render(){
        return(
            <div>
                <form id = "searchBar">
                    <input id = "searchInput" placeholder = "Search player.." autoComplete = "off" ref = {input => this.search = input} onChange = {this.changeSearchValue}/>
                </form>
                <SearchButton click = {this.searchClicked}/>
            </div>
        );
    }    
}

export default SearchBar;
