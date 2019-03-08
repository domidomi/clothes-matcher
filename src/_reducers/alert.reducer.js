import { alertConstants as alert } from "../_actions/alert.actions";

const initialState = {
  type: "",
  message: ""
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alert.SUCCESS:
      return {
        type: "alert-success",
        message: action.message
      };
    case alert.INFO:
      return {
        type: "alert-info",
        message: action.message
      };
    case alert.ERROR:
      return {
        type: "alert-danger",
        message: action.message
      };
    case alert.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
