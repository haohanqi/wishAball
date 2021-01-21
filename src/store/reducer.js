import { combineReducers } from "redux"
import searchReducer from "../components/searchPage/state/searchReducer"
import homeReducer from "../components/homePage/state/homeReducer"
export default combineReducers({
  searchReducer,
  homeReducer,
})
