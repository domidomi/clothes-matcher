import { LOG_IN, LOG_OUT } from "../actions/authentication.actions";

const initialState = {
  isLoggedIn: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: action.loggedIn
      };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: action.loggedIn
      };

    default:
      return state;
  }
};

export default authenticationReducer;
