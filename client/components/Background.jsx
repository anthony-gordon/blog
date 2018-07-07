import BackgroundList from "./BackgroundList";
import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds } from "../actions/backgrounds";
import RightColumns from "./RightColumns";
import LeftColumns from "./LeftColumns";
import { fetchArtworks } from "../actions/artworks";

class Background extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
    this.props.dispatch(fetchArtworks());
  }

  render() {
    {
      var oneBackground = this.props.backgrounds[this.props.backgroundIndex];
    }
    {
      oneBackground = oneBackground || "";
    }

    return (
      <div className="columns">
        <div className="column" id="maincontent">
          <BackgroundList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex,
    artworks: state.artworks,
    artworkIndex: state.artworkIndex,
    width: state.width
  };
}

export default connect(mapStateToProps)(Background);
