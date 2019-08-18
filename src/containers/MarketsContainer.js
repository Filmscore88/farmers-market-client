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
        <img src= "https://media.istockphoto.com/vectors/farmers-market-hand-lettering-vintage-poster-vector-id513223808?k=6&m=513223808&s=612x612&w=0&h=_E-W0GQcAXYWMjpXEscRsbdBaTRCYONFOnfepm_jyZo="/>
        {this.props.markets.map( market => (
          <h2><MarketsList key={market.id} id= {market.id} name={market.name} /> </h2>

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
