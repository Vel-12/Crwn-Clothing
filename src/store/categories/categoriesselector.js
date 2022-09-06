import { createSelector } from "reselect";

const selectCatgoryReducer = (state) => state.categories;

export const selectCatgories = createSelector(
  [selectCatgoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectcategoriesMap = createSelector(
  [selectCatgories],
  (categories) =>
    categories.reduce((acc, curr) => {
      const { title, items } = curr;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectcatgoriesIsLoading = createSelector(
  [selectCatgoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
