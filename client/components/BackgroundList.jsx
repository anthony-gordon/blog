import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  // updatePostIndex,
  increaseTheBackgroundIndex
} from "../actions/backgrounds";
import { updatePostIndex } from "../actions/posts";
import { withRouter, Link } from "react-router-dom";
// function findIndexOfClickedOnPost(post) {
//   console.log(state.backgrounds.indexOf(post));
// }

class BackgroundList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.findIndexOfClickedOnPost = this.findIndexOfClickedOnPost.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  updateThePostIndex(postIndexFromClick) {
    this.props.dispatch(updatePostIndex(postIndexFromClick));
  }

  render() {
    return (
      <div>
        <div>
          {this.props.backgrounds
            .slice(0)
            .reverse()
            .slice(0, 3)
            .map(background => {
              return (
                <div>
                  <h2 id="blogposttitle">{background.title}</h2>
                  <h2>{background.date}</h2>
                  <img src={background.url} />
                  <p>{background.paragraph1}</p>
                  <Link to="/post">
                    <a>
                      <button
                        id="deletebutton"
                        onClick={() =>
                          this.updateThePostIndex.bind(this)(
                            this.props.backgrounds.indexOf(background)
                          )
                        }
                        className="button is-white"
                      >
                        Read More
                      </button>
                    </a>
                  </Link>
                </div>
              );
            })}
          <Link to="/posts">
            <a>
              <button id="deletebutton" className="button is-white">
                More Posts
              </button>
            </a>
          </Link>
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

export default withRouter(connect(mapStateToProps)(BackgroundList));
