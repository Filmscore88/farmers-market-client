export const updateMarketFormData = marketsFormData => {
  return {
    type: 'UPDATED_DATA',
    marketsFormData
  }
}


export const resetMarketForm = () => {
  return {
    type: "RESET_MARKET_FORM"
  }
}
