import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer.js";
import { rootSaga } from "./rootSaga.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddlware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddlware,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddlware.run(rootSaga);

export const persistor = persistStore(store);
