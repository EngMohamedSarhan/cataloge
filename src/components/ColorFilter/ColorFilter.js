import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  OutlinedInput,
  Chip,
  InputLabel,
} from "@mui/material";
import { colors } from "../../utility/constants/constants";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import ClearButton from "../ClearButton/ClearButton";
import connector from "../../redux/map";

const ColorFilter = ({ selectedColors, setSelectedColors }) => {
  const classes = useStyles(theme);

  const handleSelect = (event) => {
    setSelectedColors(event.target.value);
  };

  const renderSelected = () => (
    <Box
      sx={{
        ...classes.capitalize,
        ...classes.flex,
        ...classes.wrap,
        gap: 0.5,
      }}
    >
      {selectedColors.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  );

  const renderColors = () =>
    colors.map((color) => (
      <MenuItem
        key={color}
        value={color}
        style={classes.capitalize}
        sx={selectedColors.includes(color) ? classes.grayFont : null}
      >
        {color}
      </MenuItem>
    ));

  return (
    <Box margin={1}>
      <Typography margin={1}>Color</Typography>
      <FormControl sx={{ ...classes.widthSM, m: 1 }}>
        <InputLabel>Selected</InputLabel>
        <Select
          multiple
          value={selectedColors}
          onChange={handleSelect}
          input={<OutlinedInput label='Selected' />}
          renderValue={renderSelected}
        >
          {renderColors()}
        </Select>
      </FormControl>
      {selectedColors.length !== 0 && (
        <ClearButton onClick={() => setSelectedColors([])} />
      )}
    </Box>
  );
};

export default connector(ColorFilter);
