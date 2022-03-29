import { createAction } from "../../utils/reducer/reducer.js";
import USER_ACTION_TYPES from "./userTypes.js";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
