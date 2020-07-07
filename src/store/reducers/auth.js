import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
   idToken: null,
   userId: null,
   error: null,
   loading: false,
   authRedirectPath: "/",
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionType.AUTH_START:
         return authStart(state, action);
      case actionType.AUTH_SUCCESS:
         return authSuccess(state, action);
      case actionType.AUTH_FAIL:
         return authFail(state, action);
      case actionType.AUTH_SIGNOUT:
         return authSignOut(state, action);
      case actionType.SET_AUTH_REDIRECT_PATH:
         return setAuthRedirectPath(state, action);
      default:
         return state;
   }
};

const setAuthRedirectPath = (state, action) => {
   return updateObject(state, { authRedirectPath: action.path });
};

const authStart = (state, action) => {
   return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
   return updateObject(state, {
      idToken: action.idToken,
      userId: action.userId,
      error: null,
      loading: false,
   });
};

const authFail = (state, action) => {
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const authSignOut = (state, action) => {
   return updateObject(state, {
      idToken: null,
      userId: null,
   });
};

export default reducer;
