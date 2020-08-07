export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AGENT_CONFIRM_SUCCESS = 'AGENT_CONFIRM_SUCCESS';
export const ACC_VERIFY_SUCCESS = 'ACC_VERIFY_SUCCESS';

export const SIGN_UP = 'SIGN_UP';

export const VERIFY_ACCOUNT = 'VERIFY_ACCOUNT';

export const UNAUTHORIZED = 'UNAUTHORIZED';

export const LOGIN_TOKEN = 'hfc-login-token';
export const REFRESH_TOKEN = 'hfc-refresh-token';

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

export const verifyAccount = formData => ({
  type: VERIFY_ACCOUNT,
  payload: formData
});

// export const loginSuccess = data => ({
//   type: LOGIN_SUCCESS,
//   payload: data
// })

// export const loginFailure = err => ({
//   type: LOGIN_FAILURE,
//   payload: err
// })

export const logout = routerHistory => ({
  type: LOGOUT,
  payload: { routerHistory }
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const agentConfirmSuccess = data => ({
  type: AGENT_CONFIRM_SUCCESS,
  payload: data
});

export const accVerifySuccess = data => ({
  type: ACC_VERIFY_SUCCESS,
  payload: data
});

export const unAuthorized = () => ({
  type: UNAUTHORIZED
});
