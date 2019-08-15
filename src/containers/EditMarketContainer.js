import React, { Component } from "react"
import { connect } from 'react-redux'
// import { editMarket } from "../redux/actions/marketsActions"
import '../Markets.css'
import MarketsList from '../components/MarketsList';



class EditMarketContainer extends Component {
  //
  // componentDidMount() {
  //   this.props.editMarket()
  // }



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

export default connect(mapStateToProps, null )(EditMarketContainer);
