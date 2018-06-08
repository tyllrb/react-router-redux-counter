import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";
import routerListener from "./middleware/router";

/* 
  Here we apply our routerListener function into the redux middleware chain. 
  This allows us to respond and dispatch approriate COUNTER_ADD or COUNTER_SUBTRACT
  based on the pathname of the router update action.
  */
export default createStore(reducer, applyMiddleware(routerListener));
