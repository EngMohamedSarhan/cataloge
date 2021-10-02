import { Drawer, Box, Divider, IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import PriceFilter from "../PriceFilter/PriceFilter";
import ColorFilter from "../ColorFilter/ColorFilter";
import RatingFilter from "../RatingFilter/RatingFilter";

const FilterDrawer = ({ open, setOpen }) => {
  const classes = useStyles(theme);
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant={window.innerWidth < 450 ? "temporary" : "persistent"}
        sx={open ? classes.drawer : null}
      >
        <Box sx={{ ...classes.barMargin, overflowY: "auto" }}>
          <div style={classes.flexEnd}>
            <IconButton
              aria-label='back'
              color='inherit'
              onClick={() => setOpen(false)}
              sx={{ m: 1 }}
            >
              <ArrowBackIos />
            </IconButton>
          </div>
          <PriceFilter />
          <Divider />
          <ColorFilter />
          <Divider />
          <RatingFilter />
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
