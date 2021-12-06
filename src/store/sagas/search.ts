import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../utils/axiosInstance";
import * as actionTypes from "../actionTypes";
import { setSearchImagesError, setSearchImages } from "../actions";
import { FetchImagesPayload, SearchAction } from "../../types";
import { AxiosResponse } from "axios";

function searchImagesApi(
  params: FetchImagesPayload
): Promise<AxiosResponse<any, any>> {
  return axios.doCall(`/gifs/search`, "GET", null, params);
}

function* searchImagesEffect(action: SearchAction): any {
  try {
    const payload = action.payload as FetchImagesPayload;
    const response = yield call(searchImagesApi, payload);
    yield put(setSearchImages(response.data));
  } catch (e) {
    yield put(setSearchImagesError({ message: "Invalid search details" }));
  }
}

export function* searchImagesWatcher() {
  yield takeLatest(actionTypes.FETCH_SEARCH_IMAGES, searchImagesEffect);
}
