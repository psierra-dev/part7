import {useState} from "react";
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
import {Link, useLoaderData} from "react-router-dom";
import {useSelector} from "react-redux";
import {grey, red} from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

export async function loader({params}) {
  const blog = await blogService.getOne(params.blogId);
  return {blog};
}
const BlogDetailPage = () => {
  const data = useLoaderData();
  const [comments, setComments] = useState(data.blog.comments);
  const [blog, setBlog] = useState(data.blog);

  const user = useSelector((state) => state.user.user);

  const isLike = blog.likes.some((like) => like === user.id);
  console.log(isLike, "--isLike");

  const addComment = async (event) => {
    event.preventDefault();
    console.log(event.target.comment.value, "--value");

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
        <Link to={blog.url}>{blog.url}</Link>
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
