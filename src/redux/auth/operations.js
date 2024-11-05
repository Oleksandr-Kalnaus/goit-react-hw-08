// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

// export const getUser = createAsyncThunk(
//   "users/getUser",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/users/current");
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const signupUser = createAsyncThunk(
//   "users/signupUser",
//   async (newUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/users", newUser);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const loginUser = createAsyncThunk(
//   "users/loginUser",
//   async (loginedUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/users", loginedUser);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const logoutUser = createAsyncThunk(
//   "users/logoutUser",
//   async (loginedUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/users", loginedUser);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
