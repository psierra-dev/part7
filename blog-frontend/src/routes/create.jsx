import {Box} from "@mui/material";
import BlogForm from "../components/BlogForm";

const CreatePage = () => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <h2>Create New Blog</h2>
      <BlogForm createBlog={() => null} />
    </Box>
  );
};

export default CreatePage;
