import { createAction } from "../../utils/reducer/reducer.js";
import CATEGORIES_TYPES from "./categoryTypes.js";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_TYPES.SET_CATEGORIES, categoriesArray);
