import React, { Component } from "react"

export default class MarketsContainer extends Component{
    state =  {
        markets: []
    }



  componentDidMount() {
    fetch("http://localhost:3001/api/markets")
      .then(res => {
        return res.json()
      })

      .then(markets => this.setState({ markets }))
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
