import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds } from "../actions/backgrounds";
import { Link } from "react-router-dom";
import { updatePostIndex } from "../actions/posts";

class BackgroundList extends React.Component {
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
      <div className="columns">
        <div className="column" id="maincontent">
          <div>
            <div id="pictures" className="columns is-multiline">
              {this.props.backgrounds.map(background => {
                return (
                  <div className="column is-one-third">
                    <img src={background.url} />
                    <h2>{background.title}</h2>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postIndex: state.postIndex,
    backgrounds: state.backgrounds
  };
}

export default connect(mapStateToProps)(BackgroundList);
