import { Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";

const CategoryCard = ({ category }) => {
  const classes = useStyles(theme);
  const location = useLocation();
  const isHere = location.pathname.includes(
    `/cataloge/category/${category.id}`
  );

  return (
    <Grid
      item
      component={Link}
      key={category.id}
      margin={1}
      to={`/cataloge/category/${category.id}`}
      sx={{
        ml: 3,
        mr: 3,
        ...(isHere
          ? { transition: "transform 0.25s" }
          : { ...classes.spin, ...classes.pointer }),
      }}
    >
      <img
        alt={category.name}
        src={category.image}
        style={classes.categoryCircle}
      />
      <Typography
        component='h6'
        color='initial'
        align='center'
        margin={1}
        sx={isHere ? classes.grayFont : null}
      >
        {category.name}
      </Typography>
    </Grid>
  );
};

export default CategoryCard;
