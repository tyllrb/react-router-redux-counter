import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import Counter from "./containers/counter";
import store from "./store";

/* 
  Pretty straightforward, we want to wrap our entire application
  in the redux <Provider> container which gives us access to the store
  across our entire application. We also define our routes here as well,
  normally we would create a seperate component to isolate all our
  routing definitions to a single point of access and concern. But we only have
  three definitions so its not a big deal to leave them here. 

  Every route points to the Counter container. This is because the Counter container is
  the only page of our application, and it gets the counter value from redux and uses a presentation
  component (CounterDisplay) to display that value.
*/
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <main>
        <Route exact path="/" component={Counter} />
        <Route exact path="/add" component={Counter} />
        <Route exact path="/subtract" component={Counter} />
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("container")
);
