import { fork } from 'redux-saga/effects';
import { authFlow, loginFlow, registrationFlow } from './auth';
import { currencyWatch, fetchBtcWatch, fetchEthWatch } from "./currency";
import { fetchWalletWatch, sellCurrencyWatch, buyCurrencyWatch } from './wallet'

export default function*() {
  yield fork(authFlow);
  yield fork(loginFlow);
  yield fork(registrationFlow);
  yield fork(currencyWatch);
  yield fork(fetchWalletWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchWalletWatch);
  yield fork(sellCurrencyWatch);
  yield fork(buyCurrencyWatch);
}
