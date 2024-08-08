import {useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import blogService from "../services/blogs";
import {grey, red} from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import {
  clearNotification,
  setNotification,
} from "../reducers/notificationReducer";

export async function loader({params}) {
  const blog = await blogService.getOne(params.blogId);
  return {blog};
}
const BlogDetailPage = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(data.blog.comments);
  const [blog, setBlog] = useState(data.blog);

  const user = useSelector((state) => state.user.user);

  const isLike = user ? blog.likes.some((like) => like === user.id) : false;

  const addComment = async (event) => {
    event.preventDefault();
    if (!event.target.comment.value) return;
    if (!user) {
      dispatch(
        setNotification({type: "error", content: "Debes iniciar sesión"})
      );

      setTimeout(() => dispatch(clearNotification()), 5000);
      return;
    }
    try {
      const response = await blogService.addComment(
        blog.id,
        event.target.comment.value
      );
      event.target.comment.value = "";
      setComments([...comments, response]);
    } catch (error) {
      console.log(error, "-error");
    }
  };

  const handleLike = async () => {
    if (!user) {
      dispatch(setNotification({type: "error", content: "You must log in"}));

      setTimeout(() => dispatch(clearNotification()), 5000);
      return;
    }
    try {
      await blogService.like(blog.id, user.id);
    } catch (error) {
      console.log(error);
    }
    if (isLike) {
      const deletedLike = blog.likes.filter((l) => l !== user.id);
      setBlog({...blog, likes: deletedLike});
    } else {
      setBlog({...blog, likes: [...blog.likes, user.id]});
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap="1.5rem">
      <Box display="flex" flexDirection="column">
        <Typography sx={{fontSize: 30, fontWeight: 600}}>
          {blog.title}
        </Typography>
        <Link to={blog.url} target="_blank">
          {blog.url}
        </Link>
        <Box display="flex" gap=".5rem" paddingBlock="1.5rem">
          <Avatar>bl</Avatar>
          <Box>
            <Typography fontSize={15}>{blog.user.name}</Typography>
            <Typography fontSize={15} sx={{color: grey[600]}}>
              @{blog.user.username}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleLike} color="red" sx={{color: red}}>
              {isLike ? (
                <FavoriteIcon color="red" sx={{color: red[500]}} />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
            <Typography>{blog.likes.length}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton>
              <CommentIcon />
            </IconButton>
            <Typography>{blog.comments.length}</Typography>
          </Box>
        </Box>
        <Divider />
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography sx={{fontSize: 18, fontWeight: 500}}>Comments</Typography>

        <Box
          component="form"
          onSubmit={addComment}
          display="flex"
          maxWidth={300}
        >
          <InputBase
            sx={{flex: 1}}
            name="comment"
            placeholder="Add Comment"
            inputProps={{"aria-label": "add comment"}}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Box>

        <List>
          {comments.map((comment) => (
            <>
              <ListItem key={comment.id}>
                <ListItemText primary={comment.content} />
              </ListItem>
              <Divider></Divider>
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
