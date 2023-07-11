import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const getHistories = createAsyncThunk(
  "getHistories",
  async ({ user, currency }, rejectWithValue) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${endPoint}/histories/?user=${user}&currency=${currency}`,
        config
      );
      return res.data;
    } catch (error) {
      // console.log(error);
    }
  }
);
