import CATEGORIES_TYPES from "./categoryTypes.js";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.js";
import { createAction } from "../../utils/reducer/reducer.js";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);

//async thunk
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
