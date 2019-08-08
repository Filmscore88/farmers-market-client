import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMarkets } from "../redux/actions/marketsActions"



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
            <div>
              <p>Name: {market.name} </p>
              <p>Address: {market.address} </p>
              <p>Googlelink: {market.GoogleLink} </p>
              <p>Products: {market.products} </p>
              <p>Schedule: {market.schedule} </p>
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
