import {useEffect} from "react";
import {RouterProvider} from "react-router-dom";
import {useDispatch} from "react-redux";

import blogService from "./services/blogs";
import userService from "./services/user.js";

import {addUser, isSuccess} from "./reducers/userReducer.js";
import {fetchAllBlogs} from "./reducers/blogReducer.js";
import router from "./routes/index.jsx";

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
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
