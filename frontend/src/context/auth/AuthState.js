import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  BOOKINGS_CREATE_SUCCESS,
  BOOKINGS_CREATE_FAIL,
  BOOKINGS_CANCEL_SUCCESS,
  BOOKINGS_CANCEL_FAIL,
  BOOKINGS_LOAD_SUCCESS,
  BOOKINGS_LOAD_FAIL,
} from "../types";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: true,
    user: {},
    loading: false,
    error: null,
    upcoming_bookings: [],
    past_bookings: [],
    services: [
      {
        name: "Dentist",
        image: "images/dentist.jpg",
      },
      {
        name: "Gym",
        image: "images/cleaner.jpg",
      },
      {
        name: "Hairdresser",
        image: "images/hairdresser.jpg",
      },
      {
        name: "Cleaners",
        image: "images/cleaner.jpg",
      },
    ],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
	return;

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  const registerAdmin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    formData.role = "admin";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const registerCustomer = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    formData.role = "customer";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const registerEmployee = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    formData.role = "employee";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/login", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const logout = async () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const clearErrors = async () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  const createBooking = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/user/create/bookings", formData, config);

      dispatch({
        type: BOOKINGS_CREATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_CREATE_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const cancelBooking = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/user/cancel/bookings", id, config);

      dispatch({
        type: BOOKINGS_CANCEL_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_CANCEL_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const getBookings = async () => {
    try {
      const res = await axios.get("/user/get/bookings");

      dispatch({
        type: BOOKINGS_LOAD_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_LOAD_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const getServices = async () => {
    //
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        upcoming_bookings: state.upcoming_bookings,
        past_bookings: state.past_bookings,
        services: state.services,
        loadUser,
        registerAdmin,
        registerCustomer,
        registerEmployee,
        login,
        logout,
        clearErrors,
        createBooking,
        cancelBooking,
        getBookings,
        getServices,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
