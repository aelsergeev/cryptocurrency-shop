import { createActions, handleActions } from 'redux-actions';
import {
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure
} from './currency';

export const { fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure } = createActions(
  'FETCH_WALLET_REQUEST',
  'FETCH_WALLET_SUCCESS',
  'FETCH_WALLET_FAILURE'
);

export default handleActions(
  {
    [fetchWalletRequest.toString()]: state => ({ ...state, isLoading: true }),
    [fetchWalletSuccess.toString()]: (state, action) => ({ ...state, isLoading: false, coins: action.payload }),
    [fetchWalletFailure.toString()]: (state, action) => ({ ...state, isLoading: false, error: action.error }),
    [buyCurrencyRequest.toString()]: (state) => ({ ...state }),
    [buyCurrencySuccess.toString()]: (state, { payload }) => ({
      ...state,
      coins: { usd: payload.usd, btc: payload.btc, eth: payload.eth }
    }),
    [buyCurrencyFailure.toString()]: (state, action) => ({ ...state, error: action.payload }),
    [sellCurrencyRequest.toString()]: (state) => ({ ...state }),
    [sellCurrencySuccess.toString()]: (state, { payload }) => ({
      ...state,
      coins: { usd: payload.usd, btc: payload.btc, eth: payload.eth }
    }),
    [sellCurrencyFailure.toString()]: (state, action) => ({ ...state, error: action.payload })
  },
  {
    isLoading: false,
    coins: {
      usd: 0,
      btc: 0,
      eth: 0
    },
    error: null
  }
);

export const getError = state => state.wallet.error;
