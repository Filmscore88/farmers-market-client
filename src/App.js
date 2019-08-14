import React, { Component } from "react"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home"
import MarketsContainer from './containers/MarketsContainer';
import NavBar from "./components/NavBar"
import MarketsListItem from './components/MarketsListItem'

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route  exact path="/markets" component={MarketsContainer}/>
          <Route path="/markets/:id" component={MarketsListItem}/>
          <Route path="/markets/:id/edit" component={EditMarketContainer}/>

        </div>
      </Router>
    );

  }
}

export default App;
