import { Box, FormControlLabel, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ClearButton = ({ onClick }) => {
  return (
    <Box margin={1}>
      <FormControlLabel
        label='Clear'
        onClick={onClick}
        control={
          <IconButton color='error'>
            <ClearIcon />
          </IconButton>
        }
      />
    </Box>
  );
};

export default ClearButton;
