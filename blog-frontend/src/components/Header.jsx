import {
  Box,
  Button,
  Link as MuiLink,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import MenuAvatar from "./MenuAvatar";
//import MenuAvatar from "./MenuAvatar";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      component="header"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      sx={{display: matches ? "flex" : "none"}}
    >
      <Typography component="h1" color="gray" fontWeight={700} fontSize="2rem">
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
  );
};

export default Header;
