import {
  AppBar,
  Box,
  Button,
  Skeleton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import MenuAvatar from "./MenuAvatar";
import HideOnScroll from "./HideOnScroll";
import Nav from "./Nav";
//import MenuAvatar from "./MenuAvatar";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <HideOnScroll>
      <AppBar
        sx={{
          display: matches ? "block" : "none",
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="1rem"
            width="100%"
          >
            <Typography
              component="h1"
              color="gray"
              fontWeight={700}
              fontSize="2rem"
            >
              Blogs
            </Typography>
            <Nav />

            {user.isLoading ? (
              <Skeleton variant="circular" width={35} height={35} />
            ) : user.user ? (
              <MenuAvatar />
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;

/*
  return (
    <Box>
      <Box
        component="header"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
        sx={{display: matches ? "flex" : "none", position: "static"}}
      >
        <Typography
          component="h1"
          color="gray"
          fontWeight={700}
          fontSize="2rem"
        >
          Blogs
        </Typography>
        <Box component="nav" display="flex" alignItems="center" gap="1.5rem">
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
        </Box>

        {user.isLoading ? (
          <Skeleton variant="circular" width={35} height={35} />
        ) : user.user ? (
          <MenuAvatar />
        ) : (
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </Box>
    </Box>
  ); */
