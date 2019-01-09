import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import TeamPage from '../components/teamPages/TeamPage';


//main App component
//react router used when clicking different nav links
//each route renders its own team page for each division
//rosters for teams in matching division are rendered

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Header/>
          <Route exact path = "/" component = {Main} />
          <Route path = "/pacific" render={(props) => <TeamPage {...props} divisionName= "Pacific Division" />}/>
          <Route path = "/northwest" render={(props) => <TeamPage {...props} divisionName= "Northwest Division" />}/>
          <Route path = "/southwest" render={(props) => <TeamPage {...props} divisionName= "Southwest Division" />}/>
          <Route path = "/central" render={(props) => <TeamPage {...props} divisionName= "Central Division" />}/>
          <Route path = "/atlantic" render={(props) => <TeamPage {...props} divisionName= "Atlantic Division" />}/>
          <Route path = "/southeast" render={(props) => <TeamPage {...props} divisionName= "Southeast Division" />}/>
        </div>
      </Router>   
    );
  }
}

export default App;
