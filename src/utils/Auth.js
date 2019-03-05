import Auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth.config";

import { authenticationActions as authentication } from "./authentication.actions";

import store from "../_store";

const auth0 = new Auth0.WebAuth(AUTH0_CONFIG);

// To avoid using localStorage for the JWT, let's use
// in memory storage

const tokenStorage = {
  tokens: {},
  setItem: (key, value) => (this.token[key] = value),
  getItem: key => this.token[key],
  removeItem: key => (this.token[key] = undefined)
};

export function login() {
  auth0.authorize();
}

export function logout() {
  tokenStorage.removeItem("token");
  tokenStorage.removeItem("id_token");
  tokenStorage.removeItem("profile");
  tokenStorage.removeItem("expires_at");

  store.dispatch(authentication.logOut());
}

export function handleAuth() {
  auth0.parseHash(window.location.hash, (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = "";
      getProfile(authResult);
    } else if (err) {
      console.error(`Error: ${err.error}`);
    }
  });
}

function getProfile(authResult) {
  auth0.client.userInfo(authResult.accessToken, (err, profile) => {
    setSession(authResult, profile);
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
}
