import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  resultNewsArr: newsReducer,
});

export default rootReducer;
