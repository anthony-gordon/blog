import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds } from "../actions/backgrounds";
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
    backgrounds: state.backgrounds
  };
}

export default connect(mapStateToProps)(BackgroundList);
