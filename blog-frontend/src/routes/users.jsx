import userService from "../services/user";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import {Link, useLoaderData} from "react-router-dom";

export async function loader() {
  const users = await userService.getAll();
  return {users};
}
const UsersPage = () => {
  const {users} = useLoaderData();

  return (
    <Box>
      <Typography variant="h6">All Users</Typography>
      <List sx={{width: "100%", bgcolor: ""}}>
        {users.map((user) => (
          <>
            <ListItem
              key={user.id}
              alignItems="flex-start"
              secondaryAction={
                <Box display="flex" alignItems="center">
                  <Typography>{user.blogs.length}</Typography>
                  <IconButton
                    LinkComponent={Link}
                    to={`/users/${user.id}`}
                    aria-label="article"
                  >
                    <ArticleIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar>N</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <>
                    <Typography
                      sx={{display: "inline"}}
                      component="span"
                      variant="body2"
                      color=""
                    >
                      @{user.username}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Box>
  );
};

export default UsersPage;
