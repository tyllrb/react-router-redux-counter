# react-router-redux-counter
Basic counter example using react-router-redux and redux middleware. This was written using codesandbox.io, the contents of this repo are a simple upload of the .zip bundle downloaded via codesandbox.io. If you are having trouble downloading and running this project, please try viewing it here --> https://codesandbox.io/s/7jl3mj8810

## Design
This application has a very simple straightforward design. 

There is a single parent container, which reads the current value of the counter from the redux store. It passes this to a presentational pure component which simply displays the value passed down to it. 

The parent container also contains `<Link>` components via the react-router-dom, which allows us to navigate the router to new URL locations.

Finally, there is a single redux middleware function to listen to incoming actions, and if the router update location action is called with either `/add` or `/subtract` in its payload's pathname, then the corresponding `COUNTER_ADD` or `COUNTER_SUBTRACT` actions will be dispatched to update our redux store with the new appropriate counter value. 

## Improvements
This application can be improved by incorporating type constrains on our data, either using `propTypes`, or preferably the flow library. Also, source bundling (with webpack ideally), and tests would be nice additions as well. If this application were to grow in size in would probably be best to use redux effects over redux middleware to better manage/control the design of any redux actions and their corresponding side effects. 

This repo also contains action creators that are never used, but have been included to illustrate the common need for them (and their power for re-use!) and could be used very easily in the middleware like so:

```
if (action.type === "@@router/LOCATION_CHANGE") {
  if (action.payload.pathname === "/add") {
    dispatch(counterAdd());
  }
  ...
```
