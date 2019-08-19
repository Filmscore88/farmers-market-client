import React, { Component } from "react"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home"
import MarketsContainer from './containers/MarketsContainer';
import NavBar from "./components/NavBar"
import MarketsListItem from './components/MarketsListItem'
import NewMarket from './containers/NewMarket'

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route  exact path="/markets" component={MarketsContainer}/>
          <Route exact path="/markets/:id" component={MarketsListItem}/>
          <Route exact path="/markets/new" component={NewMarket}/>
        </div>
      </Router>
    );

  }
}

export default App;
