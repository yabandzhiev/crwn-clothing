import { CATEGORIES_TYPES, Category } from "./categoryTypes";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer";

export type FetchCategoriesStart = Action<CATEGORIES_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;
export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error)
);
