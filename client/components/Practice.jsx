import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  increaseTheBackgroundIndex
} from "../actions/backgrounds";
import { updatePostIndex } from "../actions/posts";
import { withRouter, Link } from "react-router-dom";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  render() {
    return (
      <div>
        <div id="nav" class="columns">
          Hello
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex
  };
}

export default withRouter(connect(mapStateToProps)(Practice));
