import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import counter from "./counter";

/* 
  Combine all our reducers and export them. We only have one custom
  reducer -- counter, which we use to ADD/SUBTRACT from the current counter state.
  We also need to use the routerReducer which react-router-redux provides as a means
  to store the router information in our redux store.
*/
export default combineReducers({
  counter,
  routing: routerReducer
});
