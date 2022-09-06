
export const FETCH_CATEGORIES_START = () => ({
  type: "FETCH_CATEGORIES_START",
});

export const FETCH_CATEGORIES_SUCCESS = (categoriesArray) => ({
  type: "FETCH_CATEGORIES_SUCCESS",
  payload: categoriesArray,
});

export const FETCH_CATEGORIES_FAILED = (error) => ({
  type: "FETCH_CATEGORIES_FAILED",
  payload: error,
});

