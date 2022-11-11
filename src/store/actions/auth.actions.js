import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants";
import { authTypes } from "../types";

const { SIGN_UP, SIGN_IN, SIGN_OUT, EMAIL_NOT_FOUND, INVALID_PASSWORD, UPDATE_STATUS } =
  authTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const resData = await response.json();

      dispatch({
        type: SIGN_UP,
        token: resData.idToken,
        userId: resData.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const resData = await response.json();


      // if (resData.error.errors[0].message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
      //   console.warn("Demasiados intentos, intente más tarde");
      // }


      // if (resData.error.message === "EMAIL_NOT_FOUND") {
      //   console.warn("Email not found");
      //   dispatch({
      //     type: EMAIL_NOT_FOUND,
      //     emailNotFound: true,
      //     invalidPassword: false,
      //   });
      // }

      // if (resData.error.message === "INVALID_PASSWORD") {
      //   console.warn("Invalid password");
      //   dispatch({
      //     type: INVALID_PASSWORD,
      //     invalidPassword: true,
      //     emailNotFound: false,
      //   });
      // }

      dispatch({
        type: SIGN_IN,
        token: resData.idToken,
        userId: resData.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateStatus = () => {
  return {
    type: UPDATE_STATUS,
    emailNotFound: false,
    invalidPassword: false,
  };
}


