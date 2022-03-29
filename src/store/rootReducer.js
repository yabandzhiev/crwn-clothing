import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer.js";

export const rootReducer = combineReducers({ user: userReducer });
