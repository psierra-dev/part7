import {Box, Skeleton, Typography} from "@mui/material";

import CardPreviewBlog from "../components/CardPreviewBlog";
import {useSelector} from "react-redux";

const Home = () => {
  const blogsState = useSelector((state) => state.blogs);

  const blogs =
    blogsState.entities.length > 1
      ? blogsState.entities.slice((a, b) => b.likes.length + a.likes.length)
      : blogsState.entities;

  if (blogsState.loading === "pending") {
    return (
      <Box display="flex" flexDirection="column" gap="1rem">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} variant="rounded" width="100%" height={100} />
        ))}
      </Box>
    );
  }

  if (!blogsState.entities) {
    return (
      <Typography sx={{textAlign: "center", color: "grey"}}>
        without blogs
      </Typography>
    );
  }

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
