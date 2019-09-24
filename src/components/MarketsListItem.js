import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {NavLink} from  'react-router-dom';


class MarketsListItem extends Component {


  render() {

    return(
      this.props.market.map( market => (
        <div key= {market.id} className= "MarketCard">
          <img src= "https://cdn.clipart.email/2e03433c29d2fe71d995c36c315481dd_10956-farmers-market-stock-vector-illustration-and-royalty-free-_450-450.jpeg"/>
          <h1>{market.name.replace(/\d*/g,'')}</h1>
          <h2>Address: {market.address}</h2>
          <h2>Products: {market.products} </h2>
          <h2>Schedule: {market.schedule.replace(/\<br\>/g," ")} </h2>
          <h3><a href= {`${market.GoogleLink}`}> GoogleMaps </a> </h3>
        </div>
      ))
    )
  }
}



const mapStateToProps = (state) => {

  const marketId = document.location.href.match(/\d+/g)[1];

  const market = state.markets.filter(market => market.id == marketId);

    return {
      market: market
    }
 }

export default connect(mapStateToProps, null)(MarketsListItem);
