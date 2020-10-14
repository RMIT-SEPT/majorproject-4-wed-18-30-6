import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  BOOKINGS_CREATE_SUCCESS,
  BOOKINGS_CREATE_FAIL,
  BOOKINGS_CANCEL_SUCCESS,
  BOOKINGS_CANCEL_FAIL,
  BOOKINGS_LOAD_SUCCESS,
  BOOKINGS_LOAD_FAIL,
  SERVICES_LOAD_SUCCESS,
  SERVICES_LOAD_FAIL,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case SERVICES_LOAD_FAIL:
    case BOOKINGS_CANCEL_FAIL:
    case BOOKINGS_CREATE_FAIL:
    case BOOKINGS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BOOKINGS_CREATE_SUCCESS:
    case BOOKINGS_CANCEL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case BOOKINGS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        upcoming_bookings: action.payload.upcoming_bookings,
        past_bookings: action.payload.past_bookings,
      };
	case LOGIN_SUCCESS:
	case REGISTER_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case SERVICES_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    default:
      return state;
  }
};
