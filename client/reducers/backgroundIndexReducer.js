const indexReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_BACKGROUND_INDEX":
      return goUpThroughBackgroundIndex(action.index, action.backgrounds);
    case "DECREASE_BACKGROUND_INDEX":
      return goDownThroughBackgroundIndex(action.index, action.backgrounds);
    default:
      return state;
  }
};

export default indexReducer;

export function goUpThroughBackgroundIndex(num, array) {
  var next = num == array.length - 1 ? 0 : num + 1;
  return next;
}

export function goDownThroughBackgroundIndex(num, array) {
  var previous = num == 0 ? array.length - 1 : num - 1;
  return previous;
}
