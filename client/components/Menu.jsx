import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  increaseTheBackgroundIndex
} from "../actions/backgrounds";
import { updatePostIndex } from "../actions/posts";
import { withRouter, Link } from "react-router-dom";

class Menu extends React.Component {
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
          <div class="column">
            <Link to="/">Home</Link>
          </div>
          <div class="column">Posts</div>
          <div class="column">About</div>
          <div class="column">Contact</div>
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

export default withRouter(connect(mapStateToProps)(Menu));
