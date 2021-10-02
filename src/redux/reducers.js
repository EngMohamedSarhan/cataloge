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
import { combineReducers } from "redux";
import { maximumPrice } from "../utility/constants/constants";

const initialCategories = {
  isPending: false,
  categories: [],
  error: "",
};

const requestCategories = (state = initialCategories, action = {}) => {
  switch (action.type) {
    case REQUEST_CATEGORIES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CATEGORIES_SUCCESS:
      return { ...state, isPending: false, categories: action.payload };
    case REQUEST_CATEGORIES_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

const initialProducts = {
  isPending: false,
  products: [],
  error: "",
};

const requestProducts = (state = initialProducts, action = {}) => {
  switch (action.type) {
    case REQUEST_PRODUCTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PRODUCTS_SUCCESS:
      return { ...state, isPending: false, products: action.payload };
    case REQUEST_PRODUCTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

const initialIsFilterOpen = {
  isFilterOpen: false,
};

const setIsFilterOpen = (state = initialIsFilterOpen, action = {}) => {
  switch (action.type) {
    case SET_IS_FILTER_OPEN:
      return { ...state, isFilterOpen: action.payload };
    default:
      return { ...state };
  }
};

const initialSort = {
  sortValue: "Price: Low to High",
};

const setSort = (state = initialSort, action = {}) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sortValue: action.payload };
    default:
      return { ...state };
  }
};

const initialPriceField = {
  priceField: [0, maximumPrice],
};

const setPriceField = (state = initialPriceField, action = {}) => {
  switch (action.type) {
    case SET_PRICE_FIELD:
      return { ...state, priceField: action.payload };
    default:
      return { ...state };
  }
};

const initialSelectedColors = {
  selectedColors: [],
};

const setSelectedColors = (state = initialSelectedColors, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_COLORS:
      return { ...state, selectedColors: action.payload };
    default:
      return { ...state };
  }
};

const initialSelectedRating = {
  selectedRating: 0,
};

const setSelectedRating = (state = initialSelectedRating, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_RATING:
      return { ...state, selectedRating: action.payload };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  requestCategories,
  requestProducts,
  setIsFilterOpen,
  setSort,
  setPriceField,
  setSelectedColors,
  setSelectedRating,
});

export default reducers;
