import { combineReducers } from "redux";
import authenticationReducer from "./authentication.reducer";
import alertReducer from "./alert.reducer";

export default combineReducers({
  authentication: authenticationReducer,
  alert: alertReducer
});
