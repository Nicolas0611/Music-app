import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { songsReducer } from "./reducer/songsReducer";

export default createStore(
  songsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
