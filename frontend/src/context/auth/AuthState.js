import React, { useReducer } from "react";
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

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
    upcoming_bookings: [
      {
        id: "2",
        worker: "",
        service: {
          id: "1",
          name: "Cleaner",
          image: "images/cleaner.jpg",
        },
        due: "2020-09-18",
        booker: "",
        time: "2020-09-18",
        price: 10.0,
      },
    ],
    past_bookings: [
      {
        id: "1",
        worker: "",
        service: {
          id: "1",
          name: "Cleaner",
          image: "images/cleaner.jpg",
        },
        due: "2020-09-18",
        booker: "",
        time: "2020-09-18",
        price: 10.0,
      },
    ],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    // localStorage.token

    try {
      dispatch({
        type: USER_LOADED,
        payload: {
          type: "admin",
        },
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: {},
      });
    }
  };

  const registerAdmin = async (formData) => {
    try {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {},
      });
    }
  };

  const registerCustomer = async (formData) => {
    try {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {},
      });
    }
  };

  const registerEmployee = async (formData) => {
    try {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {},
      });
    }
  };

  const login = async (formData) => {
    try {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: {},
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

  const createBooking = async (booking) => {
    try {
      dispatch({
        type: BOOKINGS_CREATE_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_CREATE_FAIL,
        payload: {},
      });
    }
  };
  
  const cancelBooking = async (id) => {
    try {
      dispatch({
        type: BOOKINGS_CANCEL_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_CANCEL_FAIL,
        payload: {},
      });
    }
  };
  
  const loadBookings = async () => {
    try {
      dispatch({
        type: BOOKINGS_LOAD_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: BOOKINGS_LOAD_FAIL,
        payload: {},
      });
    }
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
        loadUser,
        registerAdmin,
        registerCustomer,
        registerEmployee,
        login,
        logout,
		clearErrors,
		createBooking,
		cancelBooking,
		loadBookings,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
