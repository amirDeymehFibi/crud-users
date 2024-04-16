import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#3F59DA",
    },
    grey: {
      titles: "#222",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
  typography: {
    fontFamily: `payda, payda-light, payda-thin, payda-regular, payda-semi-bold, payda-bold, payda-extera`,
  },
});

export default theme;
