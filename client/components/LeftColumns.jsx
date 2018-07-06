import React from "react";
import { connect } from "react-redux";

class LeftColumns extends React.Component {
  render() {
    return (
      <div>
        <div id="uploadingimagebox" className="box">
          <h6 id="uploadbackgroundimage" className="subtitle is-6">
            Upload background image
          </h6>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: state.index,
    backgrounds: state.backgrounds,
    artworkIndex: state.artworkIndex,
    artworks: state.artworks
  };
}

export default connect(mapStateToProps)(LeftColumns);
