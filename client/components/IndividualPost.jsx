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
            <div>
              <h2>{onePost.title}</h2>
              <h2>{onePost.date}</h2>
              <img src={onePost.url} />
              <p>{onePost.paragraph1}</p>
              <p>{onePost.paragraph2}</p>
              <p>{onePost.paragraph3}</p>
            </div>
            <Link to="/">
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
