import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { updatePostIndex } from "../actions/posts";

class ScrollThroughPosts extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  updateThePostIndex(postIndexFromClick) {
    this.props.dispatch(updatePostIndex(postIndexFromClick));
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
      <div className="column" id="maincontent">
        <div>
          <div id="pictures" className="columns is-multiline">
            {this.props.backgrounds
              .slice(0)
              .reverse()
              .slice(0, 3)
              .map(background => {
                return (
                  <div className="column is-one-third">
                    <h2>{background.title}</h2>

                    <img src={background.url} />

                    <Link to="/post">
                      <a>
                        <button
                          id="deletebutton"
                          onClick={() =>
                            this.updateThePostIndex.bind(this)(
                              this.props.backgrounds.indexOf(background)
                            )
                          }
                          className="button is-link is-focused"
                        >
                          Read More
                        </button>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="columns" />
          <Link to="/">
            <a className="button is-white" id="returnbutton">
              Main
            </a>
          </Link>
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

export default connect(mapStateToProps)(ScrollThroughPosts);
