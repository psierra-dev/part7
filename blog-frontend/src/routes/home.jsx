import {Box} from "@mui/material";

import CardPreviewBlog from "../components/CardPreviewBlog";
import {useSelector} from "react-redux";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs, "--blogs");

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      {blogs?.map((blog) => (
        <CardPreviewBlog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          username={blog.user.username}
        />
      ))}
    </Box>
  );
};

export default Home;
