import { createMuiTheme, darken } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const primary = "#1661be",
  secondary = "#292420",
  black = "#333333",
  white = "#FFFFFF";

const breakpoints = createBreakpoints({});
breakpoints.values.lg = 1170;
breakpoints.values.md = 996;
breakpoints.values.sm = 768;

const theme = createMuiTheme({
  palette: {
    common: {
      black: black,
      white: white,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    type: "light",
  },
  breakpoints: {
    values: {
      md: 996,
      lg: 1170,
    },
  },
  typography: {
    fontFamily: "'Open Sans'",
    h1: {
      display: "inline-block",
      position: "relative",
      maxWidth: "800px",
      overflow: "hidden",
      marginBottom: "20px",

      fontFamily: "Bebas",
      fontWeight: "bold",
      fontSize: "130px",
      lineHeight: 1,
      textTransform: "uppercase",
      "& span": {
        color: primary,
      },
      [breakpoints.down(996)]: {
        marginTop: "90px",
        fontSize: "100px",
      },
      [breakpoints.down(768)]: {
        fontSize: "64px",
        maxWidth: "413px",
        marginBottom: "40px",
      },
      [breakpoints.down(470)]: {
        marginBottom: "20px",
      },
    },
    h2: {
      fontFamily: "Bebas ligth",
      fontWeight: 500,
      lineHeight: 1,
      fontSize: "64px",
      textTransform: "uppercase",
      [breakpoints.down(996)]: {
        fontSize: "50px",
      },
      [breakpoints.down(768)]: {
        textAlign: "center",
      },
      [breakpoints.down(471)]: {
        fontSize: "36px",
      },
      "& span": {
        fontFamily: "Bebas",
        color: primary,
      },
    },
    button: {},
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
        },
        body: {
          backgroundColor: secondary,
          boxSizing: "border-box",
        },
        "p span": {
          color: primary,
        },
        "::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
          "&-track": {
            background: "transparent",
            marginBottom: "0.6rem",
          },
          "&-thumb": {
            background: primary,
            borderRadius: "10px",
            "&:hover": {
              background: darken(primary, 0.25),
            },
          },
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      containedPrimary: {
        padding: "22px 39px",
        fontSize: "24px",
        fontWeight: 600,
        boxShadow: "5px 5px 0px 0px " + darken(primary, 0.25),
        transition: "all 0.15s linear 0s",
        textTransform: "none",
        [breakpoints.down(996)]: {
          fontSize: "20px",
        },
        [breakpoints.down(471)]: {
          fontSize: "16px",
        },
        "&:hover": {
          backgroundColor: primary,
          transform: "translate(5px, 5px)",
          boxShadow: "2px 2px 0px 0px " + darken(primary, 0.25),
        },
      },
      outlinedPrimary: {
        color: white,
        fontSize: "18px",
        padding: "15px 22px",
      },
      containedSecondary: {
        width: "221px",
        paddingTop: "16px",
        paddingBottom: "16px",
        fontSize: "12px",
        fontWeight: 300,
        boxShadow: "none",
        backgroundColor: "#292420",
        textTransform: "uppercase",
        "&:hover": {
          outline: "1px solid " + primary,
          outlineOffset: "-2px",
          backgroundColor: "#292420",
        },
      },
    },
    MuiContainer: {
      root: {
        position: "relative",
        [breakpoints.up(1201)]: {
          padding: "0 !important",
        },
        [breakpoints.down(1200)]: {
          paddingLeft: "15px",
          paddingRight: "15px",
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
    MuiModal: {
      style: {
        display: "block",
        maxHeight: "600px",
        maxWidth: "700px",
        margin: "auto",
        overflow: "scroll",
      },
    },
  },
});

export default theme;
