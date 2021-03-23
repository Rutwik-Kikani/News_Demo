import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function newsReducer(
  state = initialState.resultNewsArray,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_NEWS_BY_CATEGORY_AND_PAGE_SUCCESS: {
      //copy the payload news and set it in stat{}
      const cpNews = { ...action.payload.news };
      return [...cpNews.articles];
    }
    default:
      return state;
  }
}
