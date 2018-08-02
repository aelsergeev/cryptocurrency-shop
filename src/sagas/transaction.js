import { call, put, take, takeLatest } from 'redux-saga/effects';
import {
  fetchUserTransactionsRequest,
  fetchUserTransactionsFailure,
  fetchUserTransactionsSuccess
} from '../modules/transactions';
import { getUserTransactions } from '../api';
import { loginSuccess, registrationSuccess } from '../modules/auth';
import { buyCurrencySuccess, sellCurrencyRequest } from '../modules/currency';

function* fetchTransactionsFlow() {
  try {
    const response = yield call(getUserTransactions);
    yield put(fetchUserTransactionsSuccess(response.data.result));
  } catch (error) {
    yield put(fetchUserTransactionsFailure(error));
  }
}

export function* fetchTransactionsWatch() {
  yield takeLatest(fetchUserTransactionsRequest, fetchTransactionsFlow);
  yield takeLatest(buyCurrencySuccess, fetchTransactionsFlow);
  yield takeLatest(sellCurrencyRequest, fetchTransactionsFlow);
}

export function* transactionsWatch() {
  while (true) {
    const action = yield take([loginSuccess, registrationSuccess]);

    if (action.type === loginSuccess.toString() || action.type === registrationSuccess.toString())
      yield put(fetchUserTransactionsRequest());
  }
}
