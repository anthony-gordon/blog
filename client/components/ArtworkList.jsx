import React from "react";
import { connect } from "react-redux";
import { fetchArtworks, deleteArtworkRequest } from "../actions/artworks";

class ArtworkList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArtworks());
  }

  render() {
    console.log(this.props.artworks);
    {
      var theArtworks = this.props.artworks;
    }
    {
      theArtworks = theArtworks || "";
    }
    return (
      <div>
        <div id="pictures" className="columns is-multiline">
          {this.props.artworks.map(artwork => {
            return (
              <div className="column is-one-third">
                <img src={artwork.url} />

                <button
                  id="deletebutton"
                  onClick={() =>
                    this.props.dispatch(deleteArtworkRequest(artwork))
                  }
                  className="button is-link is-focused"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <a className="button is-white" id="returnbutton">
          Return
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artworks: state.artworks,
    artworkIndex: state.artworkIndex
  };
}

export default connect(mapStateToProps)(ArtworkList);
