import React from "react";
import { withRouter, Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div id="nav" class="columns">
          <div class="column">
            <Link to="/">Home</Link>
          </div>
          <div class="column">
            <Link to="/posts">Posts</Link>
          </div>
          <div class="column">About</div>
          <div class="column">Contact</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
