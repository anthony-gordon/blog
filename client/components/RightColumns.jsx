import React from "react";
import { connect } from "react-redux";

class RightColumns extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <h6 className="subtitle is-6">Scroll through backgrounds</h6>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backgroundIndex: state.backgroundIndex,
    backgrounds: state.backgrounds,
    artworkIndex: state.artworkIndex,
    artworks: state.artworks,
    width: state.width
  };
}

export default connect(mapStateToProps)(RightColumns);
