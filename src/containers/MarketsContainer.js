import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMarkets } from "../redux/actions/marketsActions"
import '../Markets.css'
import {NavLink} from  'react-router-dom'
import {BrowserRouter, as Router, Route}
import MarketsList from '../components/MarketsList'


class MarketsContainer extends Component {

  componentDidMount() {
    this.props.fetchMarkets()
  }


connect to store
grab attributes form market.id and display in tag
  render() {

    return(
      <div>
        {this.props.markets.map( market => (
          <Route path={`/markets/${market.id}`}  >
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    markets: state.markets
  })
}

export default connect(mapStateToProps, {fetchMarkets})(MarketsContainer);
