import {createSlice} from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    addBlog(state, action) {
      return state.concat(action.payload);
    },
  },
});

export const {setBlogs, addBlog} = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    try {
      const blogs = await blogService.getAll();
      dispatch(setBlogs(blogs));
    } catch (error) {
      console.log(error, "error");
    }
  };
};
export default blogSlice.reducer;
