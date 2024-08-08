import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";

import authService from "../services/auth";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(data);

      navigate("/login");
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleChangeInput = (e) => {
    const {value, name} = e.target;
    setData({...data, [name]: value});
  };

  return (
    <Box display="flex" flexDirection="column" gap="1.2rem">
      <Box>
        <Typography variant="h4" fontWeight="600">
          Register
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "grey",
          }}
        >
          Create an account
        </Typography>
      </Box>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap="1.2rem"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          data-testid="username"
          name="username"
          value={data.username}
          onChange={handleChangeInput}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          data-testid="name"
          name="name"
          value={data.name}
          onChange={handleChangeInput}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          data-testid="password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained">
          register
        </Button>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", gap: ".4rem"}}>
        <Typography sx={{fontSize: 13}}>
          Do you already have an account?
        </Typography>
        <MuiLink component={Link} to="/login">
          log in
        </MuiLink>
      </Box>
    </Box>
  );
};

export default RegisterForm;
