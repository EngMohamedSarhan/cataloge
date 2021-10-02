import { CircularProgress, Divider, Grid } from "@mui/material";
import ElementsSlider from "../ElementsSlider/ElementsSlider";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = ({ categories, isCategoriesPending, isFilterOpen }) => {
  const renderCategories = () =>
    categories.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ));

  return (
    <>
      <Grid container justifyContent='center' sx={{ mt: 2 }}>
        {isCategoriesPending ? (
          <Grid item margin={1}>
            <CircularProgress />
          </Grid>
        ) : (
          <ElementsSlider
            elementWidth={130}
            extraWidth={isFilterOpen ? 280 : 0}
          >
            {renderCategories()}
          </ElementsSlider>
        )}
      </Grid>
      <Divider />
    </>
  );
};

export default CategoryList;
