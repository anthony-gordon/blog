import React from "react";
import { connect } from "react-redux";
import {
  fetchBackgrounds,
  deleteBackgroundRequest
} from "../actions/backgrounds";

class BackgroundList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  render() {
    return (
      <div>
        <div>
          {this.props.backgrounds.map(background => {
            return (
              <div>
                <h2>{background.title}</h2>
                <h2>{background.date}</h2>
                <img src={background.url} />
                <p>{background.paragraph1}</p>
                <button
                  id="deletebutton"
                  onClick={() =>
                    this.props.dispatch(deleteBackgroundRequest(background))
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
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex
  };
}

export default connect(mapStateToProps)(BackgroundList);
