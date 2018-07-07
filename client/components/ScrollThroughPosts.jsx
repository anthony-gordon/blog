import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { increaseScrollIndices, decreaseScrollIndices } from "../actions/posts";

class ScrollThroughPosts extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  increaseTheScrollIndices() {
    console.log(this.props.backgrounds.length);
    this.props.dispatch(increaseScrollIndices(this.props.backgrounds));
  }

  decreaseTheScrollIndices() {
    this.props.dispatch(decreaseScrollIndices(this.props.backgrounds));
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
          <div className="columns">
            <div className="column is-one-half">
              <button
                className="button is-white"
                onClick={() => this.decreaseTheScrollIndices.bind(this)()}
                id="returnbutton"
              >
                Back
              </button>
            </div>
            <div className="column is-one-half">
              <button
                onClick={() => this.increaseTheScrollIndices.bind(this)()}
                className="button is-white"
                id="returnbutton"
              >
                Next
              </button>
            </div>
          </div>
          <div id="pictures" className="columns is-multiline">
            {this.props.backgrounds
              .slice(0)
              .reverse()
              .slice(this.props.scrollIndices[0], this.props.scrollIndices[1])
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postIndex: state.postIndex,
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex,
    scrollIndices: state.scrollIndices
  };
}

export default connect(mapStateToProps)(ScrollThroughPosts);
