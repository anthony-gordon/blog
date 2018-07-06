const artworkSizeReducer = (state = 200, action) => {
  switch (action.type) {
    case "MAKE_ARTWORK_BIGGER":
      return increaseWidth(action.width);
    case "MAKE_ARTWORK_SMALLER":
      return decreaseWidth(action.width);
    default:
      return state;
  }
};

export default artworkSizeReducer;

export function increaseWidth(width) {
  var next = width + 5;
  if (width >= 400) {
    return 400;
  } else return next;
}

export function decreaseWidth(width) {
  var next = width - 5;
  if (width <= 50) {
    return 50;
  } else return next;
}
