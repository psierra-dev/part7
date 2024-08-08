import {Box, Link as MuiLink} from "@mui/material";
import {NavLink} from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const links = [
  {
    to: "/",
    icon: <HomeOutlinedIcon />,
    text: "Blogs",
  },
  {
    to: "/users",
    icon: <PeopleOutlineOutlinedIcon />,
    text: "Users",
  },
  {
    to: "/create",
    icon: <CreateOutlinedIcon />,
    text: "Create",
  },
];

const Nav = () => {
  return (
    <Box
      component="nav"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="1.5rem"
      sx={{flexDirection: {xs: "column", sm: "row"}}}
    >
      {links.map((link) => (
        <MuiLink
          key={link.text}
          component={NavLink}
          to={link.to}
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
          {link.icon}
          {link.text}
        </MuiLink>
      ))}
    </Box>
  );
};

export default Nav;
