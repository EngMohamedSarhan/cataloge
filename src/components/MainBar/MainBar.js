import { AppBar, Typography, Toolbar } from "@mui/material";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";

const MainBar = () => {
  const classes = useStyles(theme);

  return (
    <AppBar id='mainBar' sx={classes.higher}>
      <Toolbar>
        <Typography
          component='h1'
          variant='label'
          margin={1}
          sx={{
            ...classes.whiteFont,
            ...classes.raleway,
            ...classes.pushCenter,
          }}
        >
          eShop Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
