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
      method: 'POST',
      headers: {
        'Content-type' : 'appication/json'
      },
      body: JSON.stringify({market: market})
    })
      .then(response => response.json())
      .then(market => dispatch(addMarket(market)))
      .catch(error => console.log(error))
  }
}

// export const editMarket = (market, routerHistory) => {
//    return dispatch => {
//     return fetch(`http://localhost:3001/api/markets/${market.id}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({market: market})
//     })
//     .then(response => response.json())
//     .then(market => {
//       dispatch(updateEvent(market))
//       routerHistory.replace(`/markets/${market.id}`)
//     })
//     .catch(error => {
//       dispatch({type: 'error'})
//       routerHistory.replace('/markets');
//      })
//   }
// }
