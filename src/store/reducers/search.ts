import {
  SearchAction,
  SearchState,
  SetSearchImagesErrorPayload,
  SetSearchImagesPayload,
} from "../../types";
import { SET_SEARCH_IMAGES, SET_SEARCH_IMAGES_ERROR } from "../actionTypes";

const initialState: SearchState = {
  images: [],
  pagination: {
    offset: 0,
    total_count: 0,
    count: 0,
  },
  errorMessage: "",
};

const SearchReducer = (
  state: SearchState = initialState,
  action: SearchAction
) => {
  switch (action.type) {
    case SET_SEARCH_IMAGES_ERROR:
      const errorPayload = action.payload as SetSearchImagesErrorPayload;
      return {
        ...state,
        errorMessage: errorPayload.message,
      };
    case SET_SEARCH_IMAGES:
      const payload = action.payload as SetSearchImagesPayload;
      return {
        images:
          payload.pagination.offset === 0
            ? [...payload.data]
            : [...state.images, ...payload.data],
        pagination: payload.pagination,
      };
    default:
      return state;
  }
};

export default SearchReducer;
