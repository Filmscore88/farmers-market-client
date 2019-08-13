import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMarkets } from "../redux/actions/marketsActions"
import '../Markets.css'
import {NavLink} from  'react-router-dom'

import MarketsList from '../components/MarketsList'


class MarketsContainer extends Component {

  componentDidMount() {
    this.props.fetchMarkets()
  }



  render() {

    return(
      <div>
        {this.props.markets.map( market => (
          <NavLink to={`/markets/${market.id}`}  >{market.name}</NavLink>

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
