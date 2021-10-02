import { Grid, IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import useStyles from "../../utility/constants/styles";
import theme from "../../utility/constants/theme";
import { useEffect, useState, useRef } from "react";
import { countElementsRow, splicer } from "../../utility/functions/helpers";

const ElementsSlider = ({ children, elementWidth, extraWidth }) => {
  const classes = useStyles(theme);
  const extraWidthRef = useRef(extraWidth);
  const [slideElems, setSlideElems] = useState(
    countElementsRow(
      children.length,
      elementWidth,
      extraWidth ? 72 * 2 + extraWidth : 72 * 2
    )
  );
  const [slides, setSlides] = useState(splicer(children, slideElems));
  const [slideNum, setSlideNum] = useState(0);
  const onResize = () => {
    const counter = countElementsRow(
      children.length,
      elementWidth,
      extraWidth ? 72 * 2 + extraWidth : 72 * 2
    );
    setSlideElems(counter);
    setSlides(splicer(children, counter));
    setSlideNum(0);
  };

  const renderSlide = () => (
    <Grid container sx={classes.fit}>
      {slides[slideNum]}
    </Grid>
  );

  useEffect(() => {
    if (extraWidthRef.current !== extraWidth) {
      extraWidthRef.current = extraWidth;
      onResize();
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return children.length !== 0 ? (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item margin={2}>
        <IconButton
          aria-label='back'
          color='inherit'
          disabled={slideNum === 0 ? true : false}
          onClick={() => setSlideNum(slideNum - 1)}
        >
          <ArrowBackIos />
        </IconButton>
      </Grid>
      {renderSlide()}
      <Grid item margin={2}>
        <IconButton
          aria-label='back'
          color='inherit'
          disabled={slideNum === slides.length - 1 ? true : false}
          onClick={() => setSlideNum(slideNum + 1)}
          sx={classes.flipX}
        >
          <ArrowBackIos />
        </IconButton>
      </Grid>
    </Grid>
  ) : null;
};

export default ElementsSlider;
