import {
  REQUEST_CATEGORIES_PENDING,
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_FAILED,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,
  SET_IS_FILTER_OPEN,
  SET_SORT,
  SET_PRICE_FIELD,
  SET_SELECTED_COLORS,
  SET_SELECTED_RATING,
} from "./constants";

export const requestCategories = () => (dispatch) => {
  dispatch({ type: REQUEST_CATEGORIES_PENDING });
  fetch("https://test-api.edfa3ly.io/category")
    .then((response) => response.json())
    .then((categories) =>
      dispatch({ type: REQUEST_CATEGORIES_SUCCESS, payload: categories })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_CATEGORIES_FAILED, payload: error })
    );
};

export const requestProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_PENDING });
  fetch("https://test-api.edfa3ly.io/product")
    .then((response) => response.json())
    .then((products) =>
      dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: products })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: error })
    );
};

export const setIsFilterOpen = (open) => ({
  type: SET_IS_FILTER_OPEN,
  payload: open,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});

export const setPriceField = (price) => ({
  type: SET_PRICE_FIELD,
  payload: price,
});

export const setSelectedColors = (colors) => ({
  type: SET_SELECTED_COLORS,
  payload: colors,
});

export const setSelectedRating = (rating) => ({
  type: SET_SELECTED_RATING,
  payload: rating,
});
