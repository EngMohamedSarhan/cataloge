import {
  Box,
  FormControl,
  MenuItem,
  Select,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { sortBy } from "../../utility/constants/constants";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import connector from "../../redux/map";

const Sort = ({ sort, setSort }) => {
  const classes = useStyles(theme);

  const handleSelect = (event) => {
    setSort(event.target.value);
  };

  const renderSortBy = () =>
    sortBy.map((value) => (
      <MenuItem
        key={value}
        value={value}
        sx={sort === value ? classes.grayFont : null}
      >
        {value}
      </MenuItem>
    ));

  return (
    <Box sx={classes.pushRight}>
      <FormControl sx={{ ...classes.widthSM, m: 2 }}>
        <InputLabel>Sort</InputLabel>
        <Select
          value={sort}
          onChange={handleSelect}
          input={<OutlinedInput label='Sort' />}
        >
          {renderSortBy()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default connector(Sort);
