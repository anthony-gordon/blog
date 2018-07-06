import { combineReducers } from "redux";
import backgroundsReducer from "./backgroundsReducer";
import backgroundIndexReducer from "./backgroundIndexReducer";
import artworksReducer from "./artworksReducer";
import artworkIndexReducer from "./artworkIndexReducer";
import artworkSizeReducer from "./artworkSizeReducer";
import postIndexReducer from "./postIndexReducer";

export default combineReducers({
  backgrounds: backgroundsReducer,
  backgroundIndex: backgroundIndexReducer,
  artworks: artworksReducer,
  artworkIndex: artworkIndexReducer,
  width: artworkSizeReducer,
  postIndex: postIndexReducer
});
