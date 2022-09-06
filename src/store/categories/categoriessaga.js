import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../components/utils/firebase/firebase";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from "./categoriesaction";

export function* FETCH_CATEGORIES_ASYNC() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(FETCH_CATEGORIES_SUCCESS(categoriesArray));
  } catch (error) {
    yield put(FETCH_CATEGORIES_FAILED(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest("FETCH_CATEGORIES_START", FETCH_CATEGORIES_ASYNC);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
