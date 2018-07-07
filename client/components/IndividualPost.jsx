import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ScrollThroughPosts from "./ScrollThroughPosts";

class BackgroundList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  render() {
    {
      var onePost = this.props.backgrounds[this.props.postIndex];
    }
    {
      onePost = onePost || "";
    }
    console.log(onePost.title);
    return (
      <div className="columns">
        <div className="column" id="maincontent">
          <div>
            <div>
              <h2>{onePost.title}</h2>
              <h2>{onePost.date}</h2>
              <img src={onePost.url} />
              <p>{onePost.paragraph1}</p>
              <p>{onePost.paragraph2}</p>
              <p>{onePost.paragraph3}</p>
            </div>

            <div className="columns">
              <div className="column is-one-half">
                <Link to="/">
                  <a className="button is-white" id="returnbutton">
                    Home
                  </a>
                </Link>
              </div>
              <div className="column is-one-half">
                <Link to="/posts">
                  <a className="button is-white" id="returnbutton">
                    Posts
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <ScrollThroughPosts />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postIndex: state.postIndex,
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex
  };
}

export default connect(mapStateToProps)(BackgroundList);
