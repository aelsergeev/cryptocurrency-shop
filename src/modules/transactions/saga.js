import { call, put, take, takeLatest } from 'redux-saga/effects';
import { fetchUserTransactionsRequest, fetchUserTransactionsFailure, fetchUserTransactionsSuccess } from './actions';
import { getUserTransactions } from '../../api';
import { loginSuccess, registrationSuccess } from '../auth/actions';
import { buyCurrencySuccess, sellCurrencySuccess } from '../currency/actions';

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
  yield takeLatest(sellCurrencySuccess, fetchTransactionsFlow);
}

export function* transactionsWatch() {
  while (true) {
    const action = yield take([loginSuccess, registrationSuccess]);

    if (action.type === loginSuccess.toString() || action.type === registrationSuccess.toString())
      yield put(fetchUserTransactionsRequest());
  }
}
