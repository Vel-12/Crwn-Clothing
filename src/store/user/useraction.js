// CHECK_USER_SESSION
// GOOGLE_SIGN_IN_START
// EMAIL_SIGN_IN_START
// SIGN_IN_SUCCESS
// SIGN_IN_FAILED
// SIGN_OUT_SUCCESS
// SIGN_OUT_FAILED
// SIGN_UP_START
// SIGN_UP_SUCCESS
// SIGN_UP_FAILED

export const CHECK_USER_SESSION = () => ({
  type: "CHECK_USER_SESSION",
});

//SIGN IN--------------------------------------------------
export const GOOGLE_SIGN_IN_START = () => ({
  type: "GOOGLE_SIGN_IN_START",
});
export const EMAIL_SIGN_IN_START = (email, password) => ({
  type: "EMAIL_SIGN_IN_START",
  payload: { email, password },
});

export const SIGN_IN_START = (user) => ({
  type: "SIGN_IN_START",
  payload: user,
});

export const SIGN_IN_FAILED = (error) => ({
  type: "SIGN_IN_FAILED",
  payload: error,
});

//SIGN OUT--------------------------------------------------
export const SIGN_OUT_START = () => ({
  type: "SIGN_OUT_START",
});

export const SIGN_OUT_SUCCESS = () => ({
  type: "SIGN_OUT_SUCCESS",
});

export const SIGN_OUT_FAILED = (error) => ({
  type: "SIGN_OUT_FAILED",
  payload: error,
});

export const SIGN_UP_START = (email, password, displayName) => ({
  type: "SIGN_UP_START",
  payload: { email, password, displayName },
});

export const SIGN_UP_SUCCESS = (user, additionalInfo) => ({
  type: "SIGN_UP_SUCCESS",
  payload: { user, additionalInfo },
});

export const SIGN_UP_FAILED = (error) => ({
  type: "SIGN_UP_FAILED",
  payload: error,
});
