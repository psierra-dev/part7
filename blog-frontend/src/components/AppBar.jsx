import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {Drawer, useMediaQuery, Button} from "@mui/material";
import Nav from "./Nav";

const HeaderPhone = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  const handleLogout = () => {
    window.localStorage.clear("token-blog");
    window.location.reload();
  };
  return (
    <Box sx={{display: !matches ? "block" : "none"}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Blogs
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        sx={{minWidth: "300px"}}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          minWidth={250}
          sx={{
            display: {xs: "flex", sm: "none"},
            flexDirection: "column",
            alignItems: "start",
            gap: "1rem",
            padding: "0.6rem",
          }}
        >
          <Nav />

          {user ? (
            <Button onClick={handleLogout} sx={{color: "red"}}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderPhone;
