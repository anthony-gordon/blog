const artworksReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_ARTWORKS":
      return action.artworks;
    default:
      return state;
  }
};

export default artworksReducer;
