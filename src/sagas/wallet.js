import { fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure } from '../modules/wallet';
import { sellCurrencyFailure, sellCurrencySuccess, sellCurrencyRequest, buyCurrencyFailure, buyCurrencySuccess, buyCurrencyRequest, getSelectedCurrency } from '../modules/currency';
import { getWallet, sellCurrency, buyCurrency } from '../api';
import { call, select, put, takeLatest } from "redux-saga/effects";

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
  yield takeLatest(fetchWalletRequest, fetchWalletFlow)
}

export function* buyCurrencyWatch() {
  yield takeLatest(buyCurrencyRequest, buyCurrencyFlow)
}

export function* sellCurrencyWatch() {
  yield takeLatest(sellCurrencyRequest, sellCurrencyFlow)
}