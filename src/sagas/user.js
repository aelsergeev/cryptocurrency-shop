import { call, put, take, takeLatest } from 'redux-saga/effects';
import { getUserInfoFailure, getUserInfoSuccess, getUserInfoRequest } from '../modules/user';
import { getUserInfo } from '../api';
import { loginSuccess, registrationSuccess } from '../modules/auth';

function* fetchUserFlow() {
  try {
    const response = yield call(getUserInfo);
    yield put(getUserInfoSuccess(response.data.result));
  } catch (error) {
    yield put(getUserInfoFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(getUserInfoRequest, fetchUserFlow);
}

export function* userWatch() {
  while (true) {
    const action = yield take([loginSuccess, registrationSuccess]);

    if (action.type === loginSuccess.toString() || action.type === registrationSuccess.toString())
      yield put(getUserInfoRequest());
  }
}
