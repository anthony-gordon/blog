export function updatePostIndex(postindex) {
  console.log("post-action", postindex);
  return {
    type: "UPDATE_POST_INDEX",
    postindex
  };
}

export function increaseScrollIndices(array) {
  console.log("scroll indices");
  return {
    type: "INCREASE_SCROLL_INDICES",
    array
  };
}

export function decreaseScrollIndices(array) {
  console.log("decrease scroll indices");
  return {
    type: "DECREASE_SCROLL_INDICES",
    array
  };
}
