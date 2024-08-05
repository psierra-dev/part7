import {Box, Button, TextField} from "@mui/material";

import {useState} from "react";
import blogService from "../services/blogs";
import {useDispatch} from "react-redux";
import {addBlog} from "../reducers/blogReducer";
import {useNavigate} from "react-router-dom";

const BlogForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataBlog, setDataBlog] = useState({
    title: "",
    author: "",
    url: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newBlog = await blogService.create(dataBlog);
      console.log(newBlog);
      dispatch(addBlog(newBlog));
      navigate("/");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap="1rem"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        type="text"
        data-testid="title"
        placeholder="write blog title here"
        value={dataBlog.title}
        onChange={({target}) => {
          setDataBlog({
            ...dataBlog,
            title: target.value,
          });
        }}
      />

      <TextField
        id="outlined-basic"
        label="Author"
        variant="outlined"
        type="text"
        data-testid="author"
        placeholder="Pedro"
        value={dataBlog.author}
        onChange={({target}) =>
          setDataBlog({
            ...dataBlog,
            author: target.value,
          })
        }
      />

      <TextField
        id="outlined-basic"
        label="Url"
        variant="outlined"
        type="text"
        data-testid="url"
        placeholder="http://blog.com"
        value={dataBlog.url}
        onChange={({target}) =>
          setDataBlog({
            ...dataBlog,
            url: target.value,
          })
        }
      />

      <Button type="submit" variant="contained">
        Create
      </Button>
    </Box>
  );
};

export default BlogForm;
