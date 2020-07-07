import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
   return {
      type: actionTypes.AUTH_START,
   };
};

export const authSuccess = (idToken, userId) => {
   return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: idToken,
      userId: userId,
   };
};

export const authFail = error => {
   return {
      type: actionTypes.AUTH_FAIL,
      error: error,
   };
};

export const signOut = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("expirationDate");
   localStorage.removeItem("userId");

   return {
      type: actionTypes.AUTH_SIGNOUT,
   };
};

export const checkAuthTimeout = expTime => {
   return dispatch => {
      setTimeout(() => {
         dispatch(signOut());
      }, expTime * 1000);
   };
};

export const auth = (email, password, isSignup) => {
   return dispatch => {
      dispatch(authStart());
      const authData = {
         email: email,
         password: password,
         returnSecureToken: true,
      };
      let url =
         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLRnPWar7LCD-nuNJOHPnAccG1hVGC-Ns";
      if (!isSignup) {
         url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLRnPWar7LCD-nuNJOHPnAccG1hVGC-Ns";
      }

      axios
         .post(url, authData)
         .then(res => {
            const expirationDate = new Date(
               new Date().getTime() + res.data.expiresIn * 1000
            );
            localStorage.setItem("token", res.data.idToken);
            localStorage.setItem("expirationDate", expirationDate);
            localStorage.setItem("userId", res.data.localId);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(checkAuthTimeout(res.data.expiresIn));
         })
         .catch(error => {
            console.error(error);
            dispatch(authFail(error.response.data.error));
         });
   };
};

export const setAuthRedirectPath = path => {
   return {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: path,
   };
};

export const authCheckState = () => {
   return dispatch => {
      const token = localStorage.getItem("token");
      if (!token) {
         dispatch(signOut());
      } else {
         const expirationDate = new Date(
            localStorage.getItem("expirationDate")
         );
         if (expirationDate <= new Date()) {
            dispatch(signOut());
         } else {
            const userId = localStorage.getItem("userId");
            dispatch(authSuccess(token, userId));
            dispatch(
               checkAuthTimeout(
                  (expirationDate.getTime() - new Date().getTime()) / 1000
               )
            );
         }
      }
   };
};
