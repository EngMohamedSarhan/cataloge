const useStyles = (theme) => ({
  flex: {
    display: "flex",
  },
  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  wrap: {
    flexWrap: "wrap",
  },
  pushCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  pushRight: {
    marginLeft: "auto",
  },
  higher: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 270,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: 270,
      boxSizing: "border-box",
    },
  },
  barMargin: {
    mt: document.querySelector("#mainBar")
      ? document.querySelector("#mainBar").offsetHeight + "px"
      : 0,
  },
  flipX: {
    transform: "scaleX(-1)",
  },
  pointer: {
    cursor: "pointer",
  },
  categoryCircle: {
    borderRadius: "50%",
    objectFit: "cover",
    height: 75,
    width: 75,
  },
  spin: {
    transition: "0.25s transform",
    "&:hover": {
      transform: "rotate(-20deg)",
    },
  },
  widthXS: {
    width: 100,
  },
  widthSM: {
    width: 200,
  },
  maxWidthMD: {
    maxWidth: 250,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 330,
    },
  },
  capitalize: { textTransform: "capitalize" },
  raleway: {
    fontFamily: "raleway",
  },
  whiteFont: {
    color: theme.palette.secondary.main,
  },
  grayFont: {
    color: theme.palette.secondary.dark,
  },
  fullWidth: {
    width: "100%",
  },
  fit: {
    width: "fit-content",
    height: "fit-content",
  },
  pageContainer: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "initial",
    },
  },
  productCardImg: {
    objectFit: "contain",
    width: 250,
    height: 250,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
});

export default useStyles;
