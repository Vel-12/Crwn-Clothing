import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categoriessaga";
import { userSaga } from "./user/usersaga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
