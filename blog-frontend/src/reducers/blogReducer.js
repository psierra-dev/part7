import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import blogService from "../services/blogs";

export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllStatus",
  async () => {
    const blogs = await blogService.getAll();
    console.log(blogs);

    return blogs;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {entities: [], loading: "idle"},
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    addBlog(state, action) {
      return state.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.loading = "idle";
      state.entities = action.payload;
    }),
      builder.addCase(fetchAllBlogs.pending, (state) => {
        state.loading = "pending";
      });
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
