import request from "superagent";

export const receiveBackgrounds = backgrounds => {
  return {
    type: "RECEIVE_BACKGROUNDS",
    backgrounds
  };
};

export function fetchBackgrounds() {
  return dispatch => {
    return request
      .get("/api/v1")
      .then(res => {
        dispatch(receiveBackgrounds(res.body));
      })
      .catch(err => {
        console.error(err.message);
      });
  };
}
