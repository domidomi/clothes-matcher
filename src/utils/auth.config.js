const config = {
  domain: "domidomi.eu.auth0.com", // e.g., joel-1.auth0.com
  clientID: "Wem5KrypTYDfECUNVlshUvnpTuOs0RY5", //e.g. 8zOgTfK4Ga1KaiFPNFen6gQstt2Jvwlo
  responseType: "token id_token",
  audience: "https://domidomi.eu.auth0.com/userinfo", // e.g., https://joel-1.auth0.com/userinfo
  scope: "openid profile",
  redirectUri: "http://localhost:3000/callback"
};

export default config;
