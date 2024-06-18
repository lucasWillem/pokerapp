export const NO_NETWORK_ERROR_MESSAGE =
  "Please ensure that you have a stable internet connection.";

export const BASE_URL = "https://poker-app-api-0d4ea22a01f7.herokuapp.com";

enum AuthenticationEndPoints {
  Register = `${BASE_URL}/api/auth/local/register`,
  Login = `${BASE_URL}/api/auth/local`,
}

export { AuthenticationEndPoints };
