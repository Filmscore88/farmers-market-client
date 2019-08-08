const initialState= []

export default(state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MARKETS_SUCCESS':
      return action.payload
    default:
      return state
  }
}
