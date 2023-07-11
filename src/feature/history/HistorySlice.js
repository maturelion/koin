import { createSlice } from "@reduxjs/toolkit";
import { getHistories } from "./HistoryAction";

const initialState = {
  loading: false,
  histories: [], // for history array
  error: null,
  success: false, // for monitoring the registration process.
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [getHistories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.histories = payload;
    },
    [getHistories.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getHistories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.histories = payload;
    },
  },
});

export default historySlice.reducer;
