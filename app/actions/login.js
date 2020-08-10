export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const SIGN_UP = 'SIGN_UP';

export const LOGIN_TOKEN = 'coda-login-token';

export const login = formData => ({
  type: LOGIN,
  payload: formData
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err
});

export const signUp = formData => ({
  type: SIGN_UP,
  payload: formData
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});
