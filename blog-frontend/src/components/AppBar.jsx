import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Link as MuiLink,
  Button,
} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderPhone = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  const logout = () => {
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
        <List sx={{minWidth: "230px"}}>
          <ListItem>
            <ListItemText
              primary={
                <MuiLink
                  component={NavLink}
                  to="/"
                  underline="none"
                  fontSize="1rem"
                  fontWeight="500"
                  display="flex"
                  alignItems="center"
                  className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  sx={{
                    color: "grey",
                    "&:hover": {
                      color: "black",
                    },
                    "&.active": {
                      color: "black",
                    },
                  }}
                >
                  <HomeOutlinedIcon />
                  Blogs
                </MuiLink>
              }
              secondary={null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <MuiLink
                  component={NavLink}
                  to="/users"
                  underline="none"
                  fontSize="1rem"
                  fontWeight="500"
                  display="flex"
                  alignItems="center"
                  className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  sx={{
                    color: "grey",
                    "&:hover": {
                      color: "black",
                    },
                    "&.active": {
                      color: "black",
                    },
                  }}
                >
                  <PeopleOutlineOutlinedIcon />
                  Users
                </MuiLink>
              }
              secondary={null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <MuiLink
                  component={NavLink}
                  to="/create"
                  underline="none"
                  fontSize="1rem"
                  fontWeight="500"
                  display="flex"
                  alignItems="center"
                  className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  sx={{
                    color: "grey",
                    "&:hover": {
                      color: "black",
                    },
                    "&.active": {
                      color: "black",
                    },
                  }}
                >
                  <CreateOutlinedIcon />
                  Create
                </MuiLink>
              }
              secondary={null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                user ? (
                  <Button sx={{color: "red"}} onClick={logout}>
                    Cerrar sesion
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                )
              }
              secondary={null}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default HeaderPhone;
