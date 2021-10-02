import { Drawer, IconButton, Grid } from "@mui/material";
import { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryDrawer = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const renderCategories = () =>
    categories.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ));

  return (
    <>
      <Drawer open={open} anchor='bottom' onClose={() => setOpen(false)}>
        <Grid container justifyContent='center' sx={{ p: 1, maxHeight: 350 }}>
          {renderCategories()}
        </Grid>
      </Drawer>
      <IconButton aria-label='category' onClick={() => setOpen(true)}>
        <CategoryIcon />
      </IconButton>
    </>
  );
};

export default CategoryDrawer;
