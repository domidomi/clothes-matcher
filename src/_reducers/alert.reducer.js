import { alertConstants as alert } from "../_actions/alert.actions";

const initialState = {};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alert.SUCCESS:
      return {
        type: "alert-success",
        message: action.message
      };
    case alert.ERROR:
      return {
        type: "alert-danger",
        message: action.message
      };
    case alert.CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
