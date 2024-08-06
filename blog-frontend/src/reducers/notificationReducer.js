import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    type: "",
    content: "",
  },
  reducers: {
    clearNotification() {
      return {
        type: "",
        content: "",
      };
    },

    setNotification(_, action) {
      return action.payload;
    },
  },
});

export const {setNotification, clearNotification} = notificationSlice.actions;

export default notificationSlice.reducer;
