import {
  FetchImagesPayload,
  SetSearchImagesErrorPayload,
  SetSearchImagesPayload,
} from "../../types";
import {
  FETCH_SEARCH_IMAGES,
  SET_SEARCH_IMAGES,
  SET_SEARCH_IMAGES_ERROR,
} from "../actionTypes";

export const fetchSearchImages = (payload: FetchImagesPayload) => ({
  type: FETCH_SEARCH_IMAGES,
  payload,
});

export const setSearchImages = (payload: SetSearchImagesPayload) => ({
  type: SET_SEARCH_IMAGES,
  payload,
});

export const setSearchImagesError = (payload: SetSearchImagesErrorPayload) => ({
  type: SET_SEARCH_IMAGES_ERROR,
  payload,
});
