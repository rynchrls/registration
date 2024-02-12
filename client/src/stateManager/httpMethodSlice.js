import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";

// state and actions
const methodSlice = createSlice({
  name: "http",
  initialState: {
    http: "http://localhost:4000/auth/register",
    data: {
      email: "",
      password: "",
      rememberMe: false,
    },
    success: false,
  },
  reducers: {
    userRegister: (state, action) => {
      // check if the password and confirm password were the same
      if (action.payload.confirmPass !== action.payload.password) {
        return window.alert("password didn't match");
      }
      // passing the input values to  initialState
      state.data.email = action.payload.email;
      state.data.password = action.payload.password;
      state.data.rememberMe = action.payload.rememberMe;

      // http method POST
      axios
        .post(state.http, state.data)
        .then((response) => {
          console.log(response);

          // middleware
          toast.success("Successfully Registered!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: "",
            theme: "light",
          });
        })
        .catch((err) => {
          // catching error via statusCode
          if (err.response.status === 404) {
            return toast.error("All fields are mandatory!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: "",
              theme: "light",
            });
          }

          // error handler if the email was already registered
          toast.error("Email was already registered!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: "",
            theme: "light",
          });
        });
    },
  },
});

export const { userRegister } = methodSlice.actions;
export default methodSlice.reducer;
