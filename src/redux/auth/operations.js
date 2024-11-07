import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Registration Error:", errorMessage);
      if (error.response?.data) {
        console.error("Error Details:", error.response.data);
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// export const register = createAsyncThunk(
//   "auth/register",
//   async (newUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/users/signup", newUser);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || error.message;
//       console.error("Registration Error:", errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Login Error:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Logout Error:", errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user. No token found.");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Refresh User Error:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
