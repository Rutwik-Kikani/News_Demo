import * as actionTypes from "./actionTypes";
import * as newsApi from "../../api/newsApi";

export function apiCallError(error) {
  return {
    type: actionTypes.API_CALL_ERROR,
    payload: { error },
  };
}

export function loadNewsSuccess(news) {
  return {
    type: actionTypes.LOAD_NEWS_BY_CATEGORY_AND_PAGE_SUCCESS,
    payload: { news },
  };
}

export function loadNewsByCategoryPageNo(categoryName, pageNo) {
  return function (dispatch) {
    return newsApi
      .getNewsByCategory(categoryName, pageNo)
      .then((news) => dispatch(loadNewsSuccess(news)))
      .catch((error) => dispatch(apiCallError(error)));
  };
}
