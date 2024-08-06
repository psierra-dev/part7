import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Link} from "react-router-dom";

const CardPreviewBlog = ({id, title, username}) => {
  return (
    <Card>
      <Link to={`/blogs/${id}`}>
        <CardContent sx={{backgroundColor: ""}}>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Avatar sx={{width: 15, height: 15}}></Avatar>
            <Typography sx={{fontSize: 14}} color="grey" gutterBottom>
              {username}
            </Typography>
          </Box>
          <Typography
            sx={{fontSize: 20, fontWeight: 600, color: grey[900]}}
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardPreviewBlog;
