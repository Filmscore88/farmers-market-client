import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {NavLink} from  'react-router-dom';


class MarketsListItem extends Component {


  render() {
    return(
      this.props.market.map( market => (
        <div key= {market.id} className= "MarketCard">
          <h3>{market.name.replace(/\d*/g,'')}</h3>
          <img src= "https://s3-media3.fl.yelpcdn.com/bphoto/PTd0DMmirVaUICMvCObj3w/258s.jpg"/>
          <p>Address: {market.address} </p>
          <p>Products: {market.products} </p>
          <p>Schedule: {market.schedule.replace(/\<br\>/g," ")} </p>
          <a href= {`${market.GoogleLink}`}> GoogleMaps </a>
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

//   <NavLink to= {`/markets/${this.props.id}/edit`}> {this.props.name} </NavLink>
