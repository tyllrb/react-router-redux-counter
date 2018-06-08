import React from "react";
import { connect } from "react-redux";
import CounterDisplay from "../components/counterdisplay";
import { Link } from "react-router-dom";

/* 
  Counter is our parent container component. It is responsible
  for recieving and dispatching any data/events to redux. This is a 
  common archeticture, where using a container to contain all relevant data and 
  operations associated with said data. To display our counter data we use a presentational
  pure component -- CounterDisplay.

  We use mapStateToProps to map the value in the redux store to an associated
  field in the containers local props object. We SHOULD use propTypes to constrain
  what sort of data we are expecting, and ideally we should be using flow to define
  our data types. 

  Also, Link, a component provided by react-router-dom, allows us to navigate to different URL locations!
*/
class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterDisplay value={this.props.counter} />
        <Link to="/add">Add</Link> <br />
        <Link to="/subtract">Subtract</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter.value };
}

export default connect(mapStateToProps)(Counter);
