const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const logIn = () => ({
  type: LOG_IN,
  loggedIn: true
});

const logOut = () => ({
  type: LOG_OUT,
  loggedIn: false
});

export { LOG_IN, LOG_OUT };
export { logIn, logOut };
