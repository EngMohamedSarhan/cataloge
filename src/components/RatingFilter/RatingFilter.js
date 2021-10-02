import { Box, Typography, Rating, Grid } from "@mui/material";
import connector from "../../redux/map";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import ClearButton from "../ClearButton/ClearButton";

const RatingFilter = ({ selectedRating, setSelectedRating }) => {
  const classes = useStyles(theme);

  const renderRatings = () =>
    [5, 4, 3, 2, 1].map((rating) => (
      <Grid
        key={rating}
        container
        alignItems='center'
        margin={1}
        style={classes.fit}
        sx={classes.pointer}
        onClick={() => setSelectedRating(rating)}
      >
        <Rating value={rating} readOnly={true} color='primary' />
        <Typography style={selectedRating === rating ? classes.grayFont : null}>
          &nbsp; & UP
        </Typography>
      </Grid>
    ));

  return (
    <Box margin={1}>
      <Typography margin={1}>Average rating</Typography>
      <Box sx={{ mt: 2 }}>{renderRatings()}</Box>
      {selectedRating !== 0 && (
        <ClearButton onClick={() => setSelectedRating(0)} />
      )}
    </Box>
  );
};

export default connector(RatingFilter);
