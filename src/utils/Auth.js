import Auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth.config";

const auth0 = new Auth0.WebAuth(AUTH0_CONFIG);

// To avoid using localStorage for the JWT, let's use 
// in memory storage

const tokenStorage = {
  tokens: {},
  setItem: (key, value) => this.token[key] = value,
  getItem: (key) => this.token[key],
  removeItem: (key) => this.token[key] = undefined
};

export function login() {
  auth0.authorize();
}

export function logout() {
  if (tokenStorage.getItem("token")) {
    tokenStorage.removeItem("token");
    tokenStorage.removeItem("id_token");
    tokenStorage.removeItem("profile");
    tokenStorage.removeItem("expires_at");
  }
  window.setState({ isLoggedIn: false, profile: undefined });
}

export function handleAuth() {
  auth0.parseHash((err, authResult) => {
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
    localStorage.setItem('access_token', authResult.accessToken); 
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
  window.setState({ isLoggedIn: true, profile });
}
