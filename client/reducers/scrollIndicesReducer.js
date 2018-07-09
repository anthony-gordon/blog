const ScrollIndicesReducer = (state = [0, 3], action) => {
  switch (action.type) {
    case "INCREASE_SCROLL_INDICES":
      return goUpThroughScrollIndices(action.array.length, state);
    case "DECREASE_SCROLL_INDICES":
      return goDownThroughScrollIndices(action.array.length, state);
    default:
      return state;
  }
};

export function goUpThroughScrollIndices(length, state) {
  if (state[1] >= length - 1) {
    return [0, 3];
  } else return [state[0] + 1, state[1] + 1];
}

export function goDownThroughScrollIndices(length, state) {
  if (state[0] <= 0) {
    return [length - 4, length - 1];
  } else return [state[0] - 1, state[1] - 1];
}

export default ScrollIndicesReducer;
