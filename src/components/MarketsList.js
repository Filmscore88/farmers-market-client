import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class MarketsList extends Component{


  render(){

    return(
      <div className= "MarketsList">


      </div>

    )
  }

}


const mapStateToProps = state =>  {
  return{
    markets: state.markets
  }

}

export default connect (mapStateToProps)(MarketsList);
