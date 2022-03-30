import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer.js";
import { categoriesReducer } from "./categories/categoryReducer.js";
import { cartReducer } from "./cart/cartReducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
