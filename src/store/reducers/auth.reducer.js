
import { authTypes } from "../types";

const { SIGN_UP, SIGN_IN, SIGN_OUT, EMAIL_NOT_FOUND, INVALID_PASSWORD, UPDATE_STATUS } =
  authTypes;

const initialState = {
  token: null,
  userId: null,
  emailNotFound: false,
  invalidPassword: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case EMAIL_NOT_FOUND:
      return {
        ...state,
        emailNotFound: action.emailNotFound,
        invalidPassword: action.invalidPassword,
      };
    case INVALID_PASSWORD:
      return {
        ...state,
        invalidPassword: action.invalidPassword,
        emailNotFound: action.emailNotFound,
      };
      case UPDATE_STATUS:
        return {
          ...state,
          emailNotFound: action.emailNotFound,
          invalidPassword: action.invalidPassword,
        };


    default:
      return state;
  }
};

export default authReducer;
