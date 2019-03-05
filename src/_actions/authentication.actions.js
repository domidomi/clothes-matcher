const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const logIn = profile => ({
  type: LOG_IN,
  profile: profile
});

const logOut = () => ({
  type: LOG_OUT
});

export const authenticationConstants = { LOG_IN, LOG_OUT };

export const authenticationActions = {
  logIn,
  logOut
};
