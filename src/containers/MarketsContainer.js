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
          <h1>Farmers Markets</h1>
          {this.props.markets.map(market => (



            <div className= "MarketCard">
              <h3>{market.name.replace(/\d*/g,'')}</h3>
              <img src= "https://s3-media3.fl.yelpcdn.com/bphoto/PTd0DMmirVaUICMvCObj3w/258s.jpg"/>
              <p>Address: {market.address} </p>
              <p>Products: {market.products} </p>
              <p>Schedule: {market.schedule.replace(/\<br\>/g," ")} </p>
              <a href= {`${market.GoogleLink}`}> GoogleMaps </a>
            </div>
          ))}

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
