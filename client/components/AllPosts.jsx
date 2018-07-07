import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import RightColumns from "./RightColumns";
import LeftColumns from "./LeftColumns";

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
        <div className="column is-2 " id="leftcolumn">
          <LeftColumns />
        </div>
        <div className="column is-8" id="maincontent">
          <div>
            <div id="pictures" className="columns is-multiline">
              {this.props.backgrounds.map(background => {
                return (
                  <div className="column is-one-third">
                    <img src={background.url} />
                    <button
                      id="deletebutton"
                      className="button is-link is-focused"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <Link to="/play">
              <a className="button is-white" id="returnbutton">
                Return
              </a>
            </Link>
          </div>
        </div>
        <div className="column is-2 " id="rightcolumn">
          <RightColumns />
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
