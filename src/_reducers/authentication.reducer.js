import { authenticationConstants as authentication } from "../_actions/authentication.actions";

const initialState = {
  isLoggedIn: false,
  // profile: undefined
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authentication.LOG_IN:
      console.log("login reducer");
      return {
        ...state,
        isLoggedIn: true,
        // profile: action.profile
      };

    case authentication.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        // profile: undefined
      };

    default:
      return state;
  }
};

export default authenticationReducer;
