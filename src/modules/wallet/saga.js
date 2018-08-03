import { fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure } from './actions';
import {
  sellCurrencyFailure,
  sellCurrencySuccess,
  sellCurrencyRequest,
  buyCurrencyFailure,
  buyCurrencySuccess,
  buyCurrencyRequest
} from '../currency/actions';
import { getWallet, sellCurrency, buyCurrency } from '../../api';
import { call, select, put, takeLatest, take } from 'redux-saga/effects';
import { loginSuccess, registrationSuccess } from '../auth/actions';
import { getSelectedCurrency } from '../currency/selector';

function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    yield put(fetchWalletSuccess(response.data.result));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

function* buyCurrencyFlow(action) {
  try {
    const selectedCurrency = yield select(getSelectedCurrency);
    const response = yield call(buyCurrency, selectedCurrency, action.payload.value);
    yield put(buyCurrencySuccess(response.data));
  } catch (error) {
    yield put(buyCurrencyFailure(error));
  }
}

function* sellCurrencyFlow(action) {
  try {
    const selectedCurrency = yield select(getSelectedCurrency);
    const response = yield call(sellCurrency, selectedCurrency, action.payload.value);
    yield put(sellCurrencySuccess(response.data));
  } catch (error) {
    yield put(sellCurrencyFailure(error));
  }
}

export function* fetchWalletWatch() {
  yield takeLatest(fetchWalletRequest, fetchWalletFlow);
}

export function* buyCurrencyWatch() {
  yield takeLatest(buyCurrencyRequest, buyCurrencyFlow);
}

export function* sellCurrencyWatch() {
  yield takeLatest(sellCurrencyRequest, sellCurrencyFlow);
}

export function* walletWatch() {
  while (true) {
    const action = yield take([loginSuccess, registrationSuccess]);

    if (action.type === loginSuccess.toString() || action.type === registrationSuccess.toString())
      yield put(fetchWalletRequest());
  }
}
