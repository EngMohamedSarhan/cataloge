import {
  LinearProgress,
  IconButton,
  Grid,
  Box,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  filterByColor,
  filterByPrice,
  filterByRating,
  filterObject,
} from "../../utility/functions/filter";
import { useRef } from "react";
import { sortByProperty } from "../../utility/functions/sort";
import { maximumPrice } from "../../utility/constants/constants";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NotFound from "../../components/NotFound/NotFound";
import LazyList from "../../components/LazyList/LazyList";
import ProductCard from "../../components/ProductCard/ProductCard";
import connector from "../../redux/map";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import Sort from "../../components/Sort/Sort";
import CategoryDrawer from "../../components/CategoryDrawer/CategoryDrawer";
import CategoryList from "../../components/CategoryList/CategoryList";

const Category = (props) => {
  const {
    categories,
    isCategoriesPending,
    products,
    isProductsPending,
    isFilterOpen,
    setIsFilterOpen,
    sort,
    priceField,
    selectedColors,
    selectedRating,
  } = props;
  const { id } = props.match.params;
  const classes = useStyles(theme);
  const results = useRef(0);

  const prepareProducts = () => {
    let temp = products.filter((p) =>
      filterObject(p, "categoryId", Number(id))
    );
    if (selectedColors.length !== 0) {
      temp = temp.filter((p) => filterByColor(p, selectedColors));
    }
    if (selectedRating !== 0) {
      temp = temp.filter((p) => filterByRating(p, selectedRating));
    }
    if (priceField[0] !== 0 || priceField[1] !== maximumPrice) {
      temp = temp.filter((p) => filterByPrice(p, priceField));
    }
    results.current = temp.length;

    switch (sort) {
      case "Price: High to Low":
        return temp.sort((a, b) => sortByProperty(a, b, "price", true));
      case "Customer Rating":
        return temp.sort((a, b) => sortByProperty(a, b, "rating", true));
      default:
        return temp.sort((a, b) => sortByProperty(a, b, "price"));
    }
  };

  const renderProducts = () =>
    prepareProducts().map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return isNaN(Number(id)) ||
    (id > categories.length && categories.length !== 0) ? (
    <NotFound />
  ) : (
    <Box sx={classes.flex}>
      <FilterDrawer open={isFilterOpen} setOpen={setIsFilterOpen} />
      <Box sx={{ ...classes.barMargin, ...classes.fullWidth }}>
        {window.innerWidth > 450 ? (
          <CategoryList
            categories={categories}
            isCategoriesPending={isCategoriesPending}
            isFilterOpen={isFilterOpen}
          />
        ) : null}

        <Toolbar>
          <IconButton
            aria-label='filter'
            color={isFilterOpen ? "primary" : "default"}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FilterAltIcon />
          </IconButton>

          {window.innerWidth <= 450 ? (
            <CategoryDrawer categories={categories} />
          ) : null}
          <Sort />
        </Toolbar>
        <Divider />
        <Toolbar>
          <Typography sx={{ ml: 1 }} variant='h6'>
            ({results.current}) Items
          </Typography>
        </Toolbar>
        <Grid container padding={2} gap={0.5} sx={classes.pageContainer}>
          {!isProductsPending ? (
            <LazyList>{renderProducts()}</LazyList>
          ) : (
            <LinearProgress />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default connector(Category);
