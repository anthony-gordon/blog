import request from "superagent";

export function increaseTheBackgroundIndex(index, backgrounds) {
  return {
    type: "INCREASE_BACKGROUND_INDEX",
    index,
    backgrounds
  };
}

export function decreaseTheBackgroundIndex(index, backgrounds) {
  return {
    type: "DECREASE_BACKGROUND_INDEX",
    index,
    backgrounds
  };
}

export const receiveBackgrounds = backgrounds => {
  return {
    type: "RECEIVE_BACKGROUNDS",
    backgrounds
  };
};

export const addBackground = background => {
  return {
    type: "ADD_BACKGROUND",
    background
  };
};

export const deleteBackground = background => {
  return {
    type: "DELETE_BACKGROUND",
    background
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

export function postBackgroundRequest(url) {
  return dispatch => {
    request
      .post("/api/v1")
      .send(url)
      .end((err, res) => {
        if (err) {
          console.log(err.message);
          return;
        }
        dispatch(addBackground(res.body));
      });
  };
}

export function deleteBackgroundRequest(background) {
  console.log(background);
  return dispatch => {
    request.delete("/api/v1/" + background.id).end((err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(deleteBackground(background));
    });
  };
}
