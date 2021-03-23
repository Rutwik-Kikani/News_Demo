import { handleResponse, handleError } from "./apiUtils";

export const myRequestHeaders = new Headers();
myRequestHeaders.append("X-Api-Key", "d0df641083064873a66781d4cf7a9147");

export const categories = {
  GENERAL: "general",
  BUSINESS: "business",
  ENTERTAINMENT: "entertainment",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
  TECHNOLOGY: "technology",
};

const requestOptions = {
  method: "GET",
  headers: myRequestHeaders,
  redirect: "follow",
};

const baseCategoryUrl =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=6";

//--------------get news by category pass param as name and pageNo-----------------------------//

export function getNewsByCategory(categoryName, pageNo) {
  return fetch(
    baseCategoryUrl + "&page=" + pageNo + "&category=" + categoryName,
    requestOptions
  )
    .then(handleResponse)
    .catch(handleError);
}
