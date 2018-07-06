import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";
import { HashRouter as Router, Route } from "react-router-dom";

class BackgroundList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  render() {
    return <div>Hello</div>;
  }
}

function mapStateToProps(state) {
  return {
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex
  };
}

export default connect(mapStateToProps)(BackgroundList);
