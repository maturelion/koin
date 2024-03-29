import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setInputError } from '../inputError/inputErrorSlice'
import { setMessage } from '../message/messageSlice'

const endPoint = process.env.REACT_APP_API_URL

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password1, password2 }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${endPoint}/rest-auth/registration/`,
        { username, email, password1, password2 },
        config
      )
      return res
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      thunkApi.dispatch(setInputError(error.response && error.response.data));
      return thunkApi.rejectWithValue(await error.json());
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${endPoint}/rest-auth/login/`,
        { username, password },
        config
      )
      console.log(res.data)
      localStorage.setItem("token", res.data.access)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      return res
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    thunkApi.dispatch(setMessage(message));
    thunkApi.dispatch(setInputError(error.response && error.response.data));
    return thunkApi.rejectWithValue(await error.json());
    }
  }
)

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({old_password, new_password1, new_password2 }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
      const res = await axios.post(
        `${endPoint}/rest-auth/password/change/`,
        { old_password, new_password1, new_password2 },
        config
      )
      localStorage.setItem("token", res.data.access_token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      return res
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    thunkApi.dispatch(setMessage(message));
    thunkApi.dispatch(setInputError(error.response && error.response.data));
    return thunkApi.rejectWithValue(await error.json());
    }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async ({ empty }, { rejectWithValue }) => {
    try {
      localStorage.clear()
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)