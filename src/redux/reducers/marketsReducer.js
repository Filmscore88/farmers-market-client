const initialState= []

export default(state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MARKETS_SUCCESS':
      return action.payload

    case 'CREATE_MARKET_SUCCESS':
      return state.concat(action.market);
      
    default:
      return state
  }
}
