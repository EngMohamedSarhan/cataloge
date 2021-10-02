import {
  requestCategories,
  requestProducts,
  setIsFilterOpen,
  setSort,
  setPriceField,
  setSelectedColors,
  setSelectedRating,
} from "./actions";
import { connect } from "react-redux";

const mapState = (state) => ({
  categories: state.requestCategories.categories,
  isCategoriesPending: state.requestCategories.isPending,
  products: state.requestProducts.products,
  isProductsPending: state.requestProducts.isPending,
  isFilterOpen: state.setIsFilterOpen.isFilterOpen,
  sort: state.setSort.sortValue,
  priceField: state.setPriceField.priceField,
  selectedColors: state.setSelectedColors.selectedColors,
  selectedRating: state.setSelectedRating.selectedRating,
});

const mapDispatch = (dispatch) => ({
  requestCategories: () => dispatch(requestCategories()),
  requestProducts: () => dispatch(requestProducts()),
  setIsFilterOpen: (open) => dispatch(setIsFilterOpen(open)),
  setSort: (sort) => dispatch(setSort(sort)),
  setPriceField: (price) => dispatch(setPriceField(price)),
  setSelectedColors: (colors) => dispatch(setSelectedColors(colors)),
  setSelectedRating: (rating) => dispatch(setSelectedRating(rating)),
});

const connector = connect(mapState, mapDispatch);

export default connector;
