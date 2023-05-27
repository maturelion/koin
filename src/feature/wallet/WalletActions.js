import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const getUserWallet = createAsyncThunk(
  "getUserBalance",
  async ({ user }, rejectWithValue) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${endPoint}/currency-balances/?wallet=${user.id}`,
        config
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
