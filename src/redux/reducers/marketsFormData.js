
const initialState = {
  name: '',
  address: '',
  GoogleLink: '',
  products: '',
  schedule: ''
}


export default (state = initialState, action) => {

    switch(action.type) {
      case 'UPDATED_DATA':
        return action.marketsFormData

      case 'RESET_MARKET_FORM':
        return initialState;
      default:
        return state;
    }
  }
