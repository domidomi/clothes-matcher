import Auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth.config";

import { authenticationActions as authentication } from "../_actions/authentication.actions";
import { alertActions as alert } from "../_actions/alert.actions";

import store from "../_store";

const auth0 = new Auth0.WebAuth(AUTH0_CONFIG);


const tokenStorage = {
  tokens: {},
  setItem: (key, value) => (this.token[key] = value),
  getItem: key => this.token[key],
  removeItem: key => (this.token[key] = undefined)
};

export function login() {
  store.dispatch(authentication.logIn({}));
  store.dispatch(alert.success("You are now logged in."));
  auth0.authorize();
}

export function logout() {
  tokenStorage.removeItem("token");
  tokenStorage.removeItem("id_token");
  tokenStorage.removeItem("profile");
  tokenStorage.removeItem("expires_at");

  store.dispatch(authentication.logOut());
  store.dispatch(alert.success("You are now logged out."));
}

export function handleAuth() {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = "";
      getProfile(authResult);
    } else if (err) {
      store.dispatch(alert.error("Something went wrong."));
      console.error(`Error: ${err.error}`);
    }
  });
}

function getProfile(authResult) {
  auth0.client.userInfo(authResult.accessToken, (err, profile) => {
    setSession(authResult, profile);
		console.log('TCL: getProfile -> authResult', authResult)
		console.log('TCL: getProfile -> profile', profile)
  });
}

function setSession(authResult, profile) {
  const expTime = authResult.expiresIn * 1000 + Date.now();
  // Save session data and update login status subject
  tokenStorage.setItem("token", authResult.accessToken);
  tokenStorage.setItem("id_token", authResult.idToken);
  tokenStorage.setItem("profile", JSON.stringify(profile));
  tokenStorage.setItem("expires_at", JSON.stringify(expTime));

  store.dispatch(authentication.logIn(profile));
  store.dispatch(alert.success("You are now logged in."));
}
