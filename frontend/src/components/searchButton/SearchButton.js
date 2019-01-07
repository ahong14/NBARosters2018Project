import React , {Component} from 'react';
import '../searchButton/SearchButton.css';

//pass down click props from SearchBar component
//use click function to obtain and clear search query

class SearchButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id = "searchButton">
                <a id = "search" className="waves-effect waves-light btn" onClick = {this.props.click}>
                    Search
                </a>
            </div>
        );
    }
}

export default SearchButton;
