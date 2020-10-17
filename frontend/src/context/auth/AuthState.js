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
    isAuthenticated: false,
    user: null,
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
    availiableTimes: [],
    availiableWorkerTimes: [],
    appointments: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (localStorage.token) {
      if (localStorage.token === "") return;
      setAuthToken(localStorage.token);
    } else return;

    try {
      const res = await axios.post(
        "/load",
        { logintoken: localStorage.token },
        config
      );

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
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
    formData.logintoken = "";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err,
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
    formData.logintoken = "";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err,
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
    formData.logintoken = "";

    try {
      const res = await axios.post("/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err,
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

      localStorage.token = res.data.logintoken;

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
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
        payload: err,
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
        payload: err,
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
        payload: err,
      });
    }
  };

  const getServices = async () => {
    try {
      const res = await axios.get("/services/get/");

      dispatch({
        type: BOOKINGS_LOAD_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_LOAD_FAIL,
        payload: err,
      });
    }
  };

  const loadAvaliableTimes = async (service) => {
    //
  };

  const loadAvaliableWorkerTimes = async (service, worker) => {
    //
  };

  const loadAppointments = async (service, worker) => {
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
        availiableTimes: state.availiableTimes,
        availiableWorkerTimes: state.availiableWorkerTimes,
        appointments: state.appointments,
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
        loadAvaliableTimes,
        loadAvaliableWorkerTimes,
        loadAppointments,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
