const postIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_POST_INDEX":
      console.log("hello");
      return action.postindex;
    default:
      return state;
  }
};

export default postIndexReducer;
