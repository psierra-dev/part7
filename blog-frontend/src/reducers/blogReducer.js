import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import blogService from "../services/blogs";

export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllStatus",
  async () => {
    const blogs = await blogService.getAll();

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
      state.entities.push(action.payload);
      return state;
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

export default blogSlice.reducer;
