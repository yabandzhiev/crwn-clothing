import { createAction } from "../../utils/reducer/reducer.js";
import CATEGORIES_TYPES from "./categoryTypes.js";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, categoriesMap);
