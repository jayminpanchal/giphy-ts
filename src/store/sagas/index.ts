import { all } from "redux-saga/effects";

import { searchImagesWatcher } from "./search";

export default function* rootSaga() {
  yield all([searchImagesWatcher()]);
}
