import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://newsapi.org/v2/";

export const myRequestHeaders = new Headers();
myRequestHeaders.append("X-Api-Key", "d0df641083064873a66781d4cf7a9147");
myRequestHeaders.append("Content-Type", "application/json; charset=utf-8");

export const categories = {
  BUSINESS: "business",
  ENTERTAINMENT: "entertainment",
  GENERAL: "general",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
  TECHNOLOGY: "technology",
};

//for reference how to write method.

// export function getAuthors() {
//     return fetch(baseUrl)
//       .then(handleResponse)
//       .catch(handleError);
// }
