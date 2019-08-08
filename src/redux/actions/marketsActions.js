export const fetchMarkets = () => dispatch => {
    return fetch("http://localhost:3001/api/markets")
    .then(res => res.json())
    .then(markets =>
      dispatch({ type: "FETCH_MARKETS_SUCCESS", payload: markets})
    )
}
