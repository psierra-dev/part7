import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../reducers/userReducer";
import authService from "../services/auth";
import blogService from "../services/blogs";
import userService from "../services/user";
import {useNavigate} from "react-router-dom";
const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data: user} = await authService.login(data);
      window.localStorage.setItem("token-blog", user.token);
      blogService.setToken(user.token);
      userService.setToken(user.token);
      dispatch(setUser(user));
      navigate("/");
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
          Login
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "grey",
          }}
        >
          Log in to your account
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
          label="Password"
          variant="outlined"
          data-testid="password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained">
          login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
