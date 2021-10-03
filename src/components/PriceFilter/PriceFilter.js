import { Grid, Box, Slider, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { maximumPrice } from "../../utility/constants/constants";
import { convert, priceFieldCheck } from "../../utility/functions/helpers";
import ClearButton from "../ClearButton/ClearButton";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import connector from "../../redux/map";

const PriceFilter = (props) => {
  const { priceField, setPriceField } = props;
  const classes = useStyles(theme);
  const [priceSlider, setPriceSlider] = useState(convert(priceField));

  const handlefield = (event, i) => {
    const { value } = event.target;
    const newValues = priceFieldCheck(priceField, value, i);
    setPriceField(newValues);
    setPriceSlider(convert(priceField));
  };

  const handleslider = (event, value) => {
    setPriceSlider(value);
    setPriceField(convert(priceSlider, true));
  };

  const clear = () => {
    setPriceSlider([0, 100]);
    setPriceField([0, maximumPrice]);
  };

  return (
    <Box margin={1}>
      <Typography margin={1}>Price range</Typography>
      <Grid container>
        <TextField
          aria-label='from $'
          label='From ($)'
          variant='outlined'
          type='number'
          min={0}
          value={priceField[0]}
          onChange={(e) => handlefield(e, 0)}
          sx={{ ...classes.widthXS, m: 1 }}
        />
        <TextField
          aria-label='to $'
          label='To ($)'
          variant='outlined'
          type='number'
          min={0}
          value={priceField[1]}
          onChange={(e) => handlefield(e, 1)}
          sx={{ ...classes.widthXS, m: 1 }}
        />
      </Grid>
      <Slider
        getAriaLabel={() => "money range"}
        value={priceSlider}
        onChange={handleslider}
        sx={{ ...classes.widthSM, m: 2 }}
      />
      {!(priceSlider[0] === 0 && priceSlider[1] === 100) && (
        <ClearButton onClick={clear} />
      )}
    </Box>
  );
};

export default connector(PriceFilter);
