import {createBrowserRouter} from "react-router-dom";
import BlogDetailPage, {loader as blogdetailLoader} from "./blog-detail.jsx";
import CreatePage from "./create.jsx";
import Home from "./home.jsx";
import LoginPage from "./Login.jsx";
import RegisterPage from "./register.jsx";
import Root from "./root.jsx";
import UserDetailPage, {loader as userdetailLoader} from "./user-detail.jsx";
import UsersPage, {loader as usersLoader} from "./users.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
        errorElement: <h2>Server error</h2>,
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userdetailLoader,
        errorElement: <h2>Error</h2>,
      },
      {
        path: "blogs/:blogId",
        element: <BlogDetailPage />,
        errorElement: <h2>Blog not found</h2>,
        loader: blogdetailLoader,
      },
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <h2>Login not found</h2>,
      },
      {
        path: "register",
        element: <RegisterPage />,
        errorElement: <h2>Register not found</h2>,
      },
    ],
  },
]);

export default router;
