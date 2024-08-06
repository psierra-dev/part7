import {useLoaderData} from "react-router-dom";
import userService from "../services/user";
import {Box, Typography} from "@mui/material";
import CardPreviewBlog from "../components/CardPreviewBlog";

export async function loader({params}) {
  const user = await userService.getOne(params.userId);
  return {user};
}

const UserDetailPage = () => {
  const {user} = useLoaderData();

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography variant="h5" fontWeight="600">
        {user.name}
      </Typography>

      <Box display="flex" flexDirection="column" gap="1rem">
        {user.blogs?.map((blog) => (
          <CardPreviewBlog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            username={user.username}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UserDetailPage;
