const backgroundsReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_BACKGROUNDS":
      return action.backgrounds;
    default:
      return state;
  }
};

export default backgroundsReducer;
