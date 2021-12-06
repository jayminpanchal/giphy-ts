import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const composer =
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReducer, {}, composer);
sagaMiddleware.run(rootSaga);

export default store;
