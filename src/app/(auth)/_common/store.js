"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

// helper to check if we are on the client
const isClient = typeof window !== "undefined";

const initialUsers = () => {
  if (!isClient) return []; 
  const item = localStorage.getItem("users");
  return item
    ? JSON.parse(item)
    : [
        {
          id: uuidv4(),
          name: "dashcode",
          email: "dashcode@gmail.com",
          password: "dashcode",
        },
      ];
};

const initialIsAuth = () => {
  if (!isClient) return false;
  const item = localStorage.getItem("isAuth");
  return item ? JSON.parse(item) : false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth(),
  },
  reducers: {
    handleRegister: (state, action) => {
      
      const { name, email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.users.push({
          id: uuidv4(),
          name,
          email,
          password,
        });
        if (isClient) {
          console.log("ggggggggggggggggg");

          localStorage.setItem("users", JSON.stringify(state.users));
        }
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },

    handleLogin: (state, action) => {
      state.isAuth = action.payload;
      if (isClient) {
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      }
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    handleLogout: (state, action) => {
      state.isAuth = action.payload;
      if (isClient) {
        localStorage.removeItem("isAuth");
      }
      toast.success("User logged out successfully", {
        position: "top-right",
      });
    },
  },
});

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
