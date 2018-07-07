const ScrollIndicesReducer = (state = [0, 3], action) => {
  switch (action.type) {
    case "INCREASE_SCROLL_INDICES":
      console.log("increase", action.array.length);
      return goUpThroughScrollIndices(action.array.length, state);
    case "DECREASE_SCROLL_INDICES":
      console.log("decrease", state.length);
      return goDownThroughScrollIndices(action.array.length, state);

    //   return [state[0] - 1, state[1] - 1];
    default:
      return state;
  }
};

export function goUpThroughScrollIndices(length, state) {
  console.log("second state", state[1], length);
  if (state[1] >= length - 1) {
    return [0, 3];
  } else return [state[0] + 1, state[1] + 1];
}

export function goDownThroughScrollIndices(length, state) {
  console.log("second state", state[1], length);
  if (state[0] <= 0) {
    return [length - 4, length - 1];
  } else return [state[0] - 1, state[1] - 1];
}

export default ScrollIndicesReducer;
