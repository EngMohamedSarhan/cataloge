import { Grid, Paper, Typography, Button, Rating } from "@mui/material";
import { currencies } from "../../utility/constants/constants";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";

const ProductCard = ({ product }) => {
  const classes = useStyles(theme);
  const firstName = product.name.split(" ", 1)[0];
  const lastName = product.name.replace(firstName, "");

  return (
    <Grid item margin={1} xs sx={classes.maxWidthMD}>
      <Paper aria-label='product' elevation={3}>
        <Grid container justifyContent='center'>
          <img
            src={product.image}
            alt='Product'
            style={{ ...classes.productCardImg }}
          />
        </Grid>
        <Typography
          align='center'
          component='h2'
          variant='label'
          sx={classes.raleway}
        >
          {firstName}
        </Typography>
        {lastName && (
          <Typography
            margin={0.5}
            align='center'
            component='h3'
            variant='label'
            sx={classes.raleway}
          >
            {lastName}
          </Typography>
        )}
        <Typography
          align='center'
          component='h2'
          variant='h6'
          color='error'
          margin={1}
        >
          {`${currencies[product.currency]}${product.price}`}
        </Typography>
        <Typography align='center' margin={1}>
          <Rating value={product.rating} readOnly={true} />
        </Typography>
        <Button variant='contained' sx={classes.whiteFont} fullWidth={true}>
          view item
        </Button>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
