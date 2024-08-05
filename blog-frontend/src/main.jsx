import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
