import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import {Alert, Box, Container} from "@mui/material";
import HeaderPhone from "../components/AppBar";
import {useSelector} from "react-redux";

const Root = () => {
  const notification = useSelector((state) => state.notification);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <HeaderPhone />
      <Container
        component="main"
        maxWidth="sm"
        sx={{flex: 1, display: "flex", flexDirection: "column"}}
      >
        <Outlet />
      </Container>
      {notification.content && (
        <Alert
          severity={notification.type}
          sx={{maxWidth: "400px", position: "fixed", bottom: 0, width: "100%"}}
        >
          {notification.content}
        </Alert>
      )}
      <footer></footer>
    </Box>
  );
};

export default Root;
