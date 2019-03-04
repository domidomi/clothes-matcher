import { LOG_IN, LOG_OUT } from "../actions/loginActions";

const initialState = {
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
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

export default loginReducer;
