import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categorySaga.js";
import { userSagas } from "./user/userSaga.js";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
