import {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useDispatch} from "react-redux";

import blogService from "./services/blogs";
import userService from "./services/user.js";

import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import CreatePage from "./routes/create.jsx";
import BlogDetailPage, {
  loader as blogdetailLoader,
} from "./routes/blog-detail.jsx";
import LoginPage from "./routes/Login.jsx";
import {addUser, isSuccess, setUser} from "./reducers/userReducer.js";
import {initializeBlogs} from "./reducers/blogReducer.js";
import UsersPage, {loader as usersLoader} from "./routes/users.jsx";
import UserDetailPage, {
  loader as userdetailLoader,
} from "./routes/user-detail.jsx";

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
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userdetailLoader,
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
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token-blog");
    if (token) {
      userService.setToken(token);
      blogService.setToken(token);
      dispatch(addUser());
    } else {
      dispatch(isSuccess());
    }
    dispatch(initializeBlogs());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
