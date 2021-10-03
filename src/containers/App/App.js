import "@fontsource/roboto";
import "@fontsource/raleway";
import { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { LinearProgress, ThemeProvider } from "@mui/material";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import theme from "../../utility/constants/theme";
import connector from "../../redux/map";
import MainBar from "../../components/MainBar/MainBar";
import NotFound from "../../components/NotFound/NotFound";
import Category from "../Category/Category";

function App(props) {
  const location = useLocation();

  const {
    requestCategories,
    requestProducts,
    isCategoriesPending,
    products,
    categories,
  } = props;

  useEffect(() => {
    if (products.length === 0) {
      requestProducts();
    }
    if (categories.length === 0) {
      requestCategories();
    }
  }, [requestCategories, requestProducts, categories.length, products.length]);

  return (
    <ThemeProvider theme={theme}>
      <MainBar />
      {isCategoriesPending && <LinearProgress />}
      {categories.length !== 0 &&
      (location.pathname === "/" || location.pathname === "/cataloge/") ? (
        <Redirect to={`/cataloge/category/${categories[0].id}`} />
      ) : null}
      <ScrollToTop />
      <Switch location={location}>
        <Route exact path='/' />
        <Route exact path='/cataloge' />
        <Route exact path='/cataloge/category/:id' component={Category} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default connector(App);
