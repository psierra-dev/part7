import {grey} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: grey[400],
      main: grey[900],
      dark: grey[800],
      contrastText: "#fff",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default theme;
