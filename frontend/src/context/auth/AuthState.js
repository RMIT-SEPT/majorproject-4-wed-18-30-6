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
} from "../types";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
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

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        loadUser,
        registerAdmin,
        registerCustomer,
        registerEmployee,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
