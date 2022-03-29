import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer.js";
import { categoriesReducer } from "./categories/categoryReducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
