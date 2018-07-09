import { combineReducers } from "redux";

import backgroundsReducer from "./backgroundsReducer";
import artworksReducer from "./artworksReducer";
import postIndexReducer from "./postIndexReducer";
import scrollIndicesReducer from "./scrollIndicesReducer";

export default combineReducers({
  backgrounds: backgroundsReducer,
  artworks: artworksReducer,
  postIndex: postIndexReducer,
  scrollIndices: scrollIndicesReducer
});
