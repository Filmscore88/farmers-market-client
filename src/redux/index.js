import {combineReducers, createStore, applyMiddleware } from "redux"
import markets from "./reducers/marketsReducer"
import marketsFormData from "./reducers/marketsFormData"
import thunk  from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


const rootReducer = combineReducers({
  markets, marketsFormData
})

export default createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  )
)
