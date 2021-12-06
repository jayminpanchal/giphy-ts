import { combineReducers } from "redux";

import SearchReducer from "./search";

export default combineReducers({
  search: SearchReducer,
});
