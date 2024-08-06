import {createSlice} from "@reduxjs/toolkit";
import userService from "../services/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    setUser(state, action) {
      return {...state, user: action.payload};
    },
    isLoading(state) {
      return {...state, isLoading: true};
    },
    isSuccess(state) {
      return {...state, isError: false, isLoading: false, isSuccess: true};
    },
    isError(state) {
      return {...state, isError: true, isLoading: false};
    },
  },
});

export const {setUser, isLoading, isSuccess, isError} = userSlice.actions;
export const addUser = () => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const resp = await userService.currentUser();

      dispatch(setUser(resp.data.user));
      dispatch(isSuccess());
    } catch (error) {
      dispatch(isError());
    }
  };
};
export default userSlice.reducer;
