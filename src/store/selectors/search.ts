import { createSelector } from "reselect";
import { StoreState } from "../../types";

const searchSelector = (state: StoreState) => state.search;

export const getImagesSelector = createSelector(
  searchSelector,
  (search) => search.images
);

export const getPaginationSelector = createSelector(
  searchSelector,
  (search) => search.pagination
);
