import {Box} from "@mui/material";
import LoginForm from "../components/LoginForm";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const LoginPage = () => {
  const user = useSelector((state) => state.user);

  if (user.user) {
    return <Navigate to="/" replace />;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      gap="1rem"
      justifyContent="center"
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
