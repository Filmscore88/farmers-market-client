import React, { Component } from "react"
import { connect } from 'react-redux'



class MarketsContainer extends Component{
    state =  {
        markets: []
    }



  componentDidMount() {
  
  }


  render () {
    if(this.state.markets.length === 0 ){
      return <h1>Loading....</h1>
    }
    return(
      <div>
        <ul>
          {this.state.markets.map(market => (
            <div>
              <p>Name: {market.name} </p>
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


export default connect(mapStateToProps)(MarketsContainer)
