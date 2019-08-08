import {combineReducers, createStore, applyMiddleware } from "redux"
import markets from "./reducers/marketsReducer"
import thunk  from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


const rootReducer = combineReducers({
  markets
})

export default createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  )
)
