import React, { Component } from "react"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home"
import MarketsContainer from './containers/MarketsContainer';

class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route  path="/markets" component={MarketsContainer} />

      </div>
      </Router>
    );

  }
}

export default App;
