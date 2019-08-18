import { resetMarketForm } from './marketForm'


export const fetchMarkets = () => dispatch => {
    return fetch("http://localhost:3001/api/markets")
    .then(res => res.json())
    .then(markets =>
      dispatch({ type: "FETCH_MARKETS_SUCCESS", payload: markets})
    )
}


const addMarket = market => {
  return {
    type: "CREATE_MARKET_SUCCESS",
    market
  }
}




export const createMarket = market => {

  return dispatch => {

    return fetch("http://localhost:3001/api/markets", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name: market.name, address: market.address, GoogleLink: market.GoogleLink, products: market.products, schedule: market.schedule}),
    })
      .then(response => response.json())

      .then(market => {

        dispatch(addMarket(market))
        dispatch(resetMarketForm())
      })
      .catch(error => console.log(error))
  }
}
