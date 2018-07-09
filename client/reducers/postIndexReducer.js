const postIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_POST_INDEX":
      return action.postindex;
    default:
      return state;
  }
};

export default postIndexReducer;
