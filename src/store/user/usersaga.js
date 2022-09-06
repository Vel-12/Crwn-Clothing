import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signOutUser,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from "../../components/utils/firebase/firebase";

import {
  SIGN_IN_FAILED,
  SIGN_IN_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from "./useraction";

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

export function* getSnapshotFromUserAuth(user, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      user,
      additionalInformation
    );
    yield put(SIGN_IN_START({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SIGN_IN_FAILED(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(SIGN_OUT_SUCCESS());
  } catch (error) {
    yield put(SIGN_OUT_FAILED(error));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(SIGN_IN_FAILED(error));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(SIGN_IN_FAILED(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(SIGN_UP_SUCCESS(user, { displayName }));
  } catch (error) {
    yield put(SIGN_UP_FAILED(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
  yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* isUserAuthenticated() {
  try {
    const user = yield call(getCurrentUser);
    if (!user) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(SIGN_IN_FAILED(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest("CHECK_USER_SESSION", isUserAuthenticated);
}
export function* onGoogleSignIn() {
  yield takeLatest("GOOGLE_SIGN_IN_START", googleSignIn);
}

export function* onEmailAndPasswordSignIn() {
  yield takeLatest("EMAIL_SIGN_IN_START", emailSignIn);
}

export function* onSignOut() {
  yield takeLatest("SIGN_OUT_START", signOut);
}

export function* onSignUp() {
  yield takeLatest("SIGN_UP_START", signUp);
}

export function* onSignInAfterSignUp() {
  yield takeLatest("SIGN_UP_SUCCESS", signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onSignOut),
    call(onEmailAndPasswordSignIn),
    call(onSignUp),
    call(onSignInAfterSignUp),
  ]);
}
