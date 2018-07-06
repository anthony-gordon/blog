const artworksReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case "RECEIVE_ARTWORKS":
      return action.artworks;
    case "ADD_ARTWORK":
      return [...newState, action.artworks];
    case "DELETE_ARTWORK":
      return [...newState].filter(artwork => artwork != action.artwork);
    default:
      return state;
  }
};

export default artworksReducer;
