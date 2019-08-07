import {combineReducers, createStore } from "redux"
import markets from "./reducers/marketsReducer"

const rootReducer = combineReducers({
  markets
})

export default createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
