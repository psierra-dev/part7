import Header from "../components/Header";
import {Outlet, useNavigation} from "react-router-dom";
import {Box, Container} from "@mui/material";
import HeaderPhone from "../components/AppBar";

const Root = () => {
  const navigation = useNavigation();

  console.log(navigation.state, "--state-navigation");

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
      <footer></footer>
    </Box>
  );
};

export default Root;
