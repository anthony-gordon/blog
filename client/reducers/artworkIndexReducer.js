const artworkIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_ARTWORK_INDEX":
      return goUpThroughArtworkIndex(action.artworkIndex, action.artworks);
    case "DECREASE_ARTWORK_INDEX":
      return goDownThroughArtworkIndex(action.artworkIndex, action.artworks);
    default:
      return state;
  }
};

export default artworkIndexReducer;

export function goUpThroughArtworkIndex(num, array) {
  var next = num == array.length - 1 ? 0 : num + 1;
  return next;
}

export function goDownThroughArtworkIndex(num, array) {
  var previous = num == 0 ? array.length - 1 : num - 1;
  return previous;
}
