import request from "superagent";

export const receiveArtworks = artworks => {
  return {
    type: "RECEIVE_ARTWORKS",
    artworks
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
