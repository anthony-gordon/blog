export function updatePostIndex(postindex) {
  return {
    type: "UPDATE_POST_INDEX",
    postindex
  };
}

export function increaseScrollIndices(array) {
  return {
    type: "INCREASE_SCROLL_INDICES",
    array
  };
}

export function decreaseScrollIndices(array) {
  return {
    type: "DECREASE_SCROLL_INDICES",
    array
  };
}
