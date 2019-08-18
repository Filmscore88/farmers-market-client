import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMarkets } from "../redux/actions/marketsActions"
import '../Markets.css'
import MarketsList from '../components/MarketsList';
import NewMarket from '../containers/NewMarket'

class MarketsContainer extends Component {

  componentDidMount() {
    this.props.fetchMarkets()
  }



  render() {

    return(
      <div>
        {this.props.markets.map( market => (
          <MarketsList key={market.id} id= {market.id} name={market.name} />

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
