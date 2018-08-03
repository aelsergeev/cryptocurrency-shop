import { fork } from 'redux-saga/effects';
import { authFlow, loginFlow, registrationFlow } from './auth/saga';
import { currencyWatch, fetchBtcWatch, fetchEthWatch } from './currency/saga';
import { fetchWalletWatch, sellCurrencyWatch, buyCurrencyWatch, walletWatch } from './wallet/saga';
import { fetchUserWatch, userWatch } from './user/saga';
import { fetchTransactionsWatch, transactionsWatch } from './transactions/saga';

export default function*() {
  yield fork(authFlow);
  yield fork(loginFlow);
  yield fork(registrationFlow);
  yield fork(currencyWatch);
  yield fork(userWatch);
  yield fork(walletWatch);
  yield fork(transactionsWatch);
  yield fork(fetchWalletWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchWalletWatch);
  yield fork(sellCurrencyWatch);
  yield fork(buyCurrencyWatch);
  yield fork(fetchUserWatch);
  yield fork(fetchTransactionsWatch);
}
