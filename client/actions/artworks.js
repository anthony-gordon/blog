import request from "superagent";

export const receiveArtworks = artworks => {
  return {
    type: "RECEIVE_ARTWORKS",
    artworks
  };
};
export const deleteArtwork = artwork => {
  return {
    type: "DELETE_ARTWORK",
    artwork
  };
};

export const addArtwork = artwork => {
  return {
    type: "ADD_ARTWORK",
    artwork
  };
};

export function fetchArtworks() {
  return dispatch => {
    return request
      .get("/api/v2")
      .then(res => {
        dispatch(receiveArtworks(res.body));
      })
      .catch(err => {
        console.error(err.message);
      });
  };
}

export function postArtworkRequest(artwork) {
  return dispatch => {
    request
      .post("/api/v2")
      .send(artwork)
      .end((err, res) => {
        if (err) {
          console.log(err.message);
          return;
        }
        dispatch(addArtwork(res.body));
      });
  };
}

export function deleteArtworkRequest(artwork) {
  console.log(artwork);
  return dispatch => {
    request.delete("/api/v2/" + artwork.id).end((err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(deleteArtwork(artwork));
    });
  };
}
