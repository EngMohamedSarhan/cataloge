import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";

const NotFound = () => {
  const classes = useStyles(theme);
  return (
    <Grid
      container
      alignItems='center'
      direction='column'
      sx={classes.barMargin}
    >
      <Grid item sx={{ m: 3 }}>
        <Typography component='h1' variant='h1' color='primary' align='center'>
          404
        </Typography>
        <Typography component='h2' variant='h5' align='center'>
          Page Not Found!
        </Typography>
      </Grid>
      <Button
        variant='contained'
        color='primary'
        component={Link}
        to='/'
        sx={classes.whiteFont}
      >
        go back home
      </Button>
    </Grid>
  );
};

export default NotFound;
