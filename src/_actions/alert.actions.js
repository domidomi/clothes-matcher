const ALERT_SUCCESS = "ALERT_SUCCESS";
const ALERT_INFO = "ALERT_INFO";
const ALERT_ERROR = "ALERT_ERROR";
const ALERT_CLEAR = "ALERT_CLEAR";

export const alertConstants = {
  SUCCESS: ALERT_SUCCESS,
  INFO: ALERT_INFO,
  ERROR: ALERT_ERROR,
  CLEAR: ALERT_CLEAR
};

export const alertActions = {
  success,
  info,
  error,
  clear
};

function success(message) {
  return { type: ALERT_SUCCESS, message };
}

function info(message) {
  return { type: ALERT_INFO, message };
}

function error(message) {
  return { type: ALERT_ERROR, message };
}

function clear() {
  return { type: ALERT_CLEAR };
}
