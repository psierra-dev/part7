import {Box} from "@mui/material";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      gap="1rem"
      justifyContent="center"
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
