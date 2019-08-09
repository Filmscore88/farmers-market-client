import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMarkets } from "../redux/actions/marketsActions"
import '../Markets.css'


class MarketsContainer extends Component{
    state =  {
        markets: []
    }



  componentDidMount() {
    this.props.fetchMarkets()
  }


  render () {
    if(this.props.markets.length === 0 ){
      return <h1>Loading....</h1>
    }
    return(
      <div>
        <ul>
          {this.props.markets.map(market => (
            <div className= "MarketCard">
              <p>Name: {market.name} </p>
              <p>Address: {market.address} </p>
              <a href= {`${market.GoogleLink}`}> GoogleMaps </a>
              <p>Products: {market.products} </p>
              <p>Schedule: {market.schedule} </p>
              <img src= "https://s3-media3.fl.yelpcdn.com/bphoto/PTd0DMmirVaUICMvCObj3w/258s.jpg"/>
            </div>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    markets: state.markets
  }
}


export default connect(mapStateToProps,
  { fetchMarkets }
)(MarketsContainer)
