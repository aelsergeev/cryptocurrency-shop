import { createActions, handleActions } from 'redux-actions';

export const {
  selectBtc,
  selectEth,
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  selectOffset,
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure
} = createActions(
    'SELECT_BTC',
    'SELECT_ETH',
    'FETCH_BTC_REQUEST',
    'FETCH_ETH_REQUEST',
    'FETCH_BTC_SUCCESS',
    'FETCH_ETH_SUCCESS',
    'FETCH_BTC_FAILURE',
    'FETCH_ETH_FAILURE',
    'SELECT_OFFSET',
    'BUY_CURRENCY_REQUEST',
    'BUY_CURRENCY_SUCCESS',
    'BUY_CURRENCY_FAILURE',
    'SELL_CURRENCY_REQUEST',
    'SELL_CURRENCY_SUCCESS',
    'SELL_CURRENCY_FAILURE'

);

export default handleActions(
  {
    [selectBtc.toString()]: state => ({ ...state, selected: 'btc' }),
    [selectEth.toString()]: state => ({ ...state, selected: 'eth' }),
    [fetchBtcRequest.toString()]: state => ({ ...state, isBtcLoading: true }),
    [fetchEthRequest.toString()]: state => ({ ...state, isEthLoading: true }),
    [fetchBtcSuccess.toString()]: (state, action) => ({
      ...state,
      isBtcLoading: false,
      btc: [...state.btc, ...action.payload]
    }),
    [fetchEthSuccess.toString()]: (state, action) => ({
      ...state,
      isEthLoading: false,
      eth: [...state.eth, ...action.payload]
    }),
    [fetchBtcFailure.toString()]: state => ({ ...state, isBtcLoading: false }),
    [fetchEthFailure.toString()]: state => ({ ...state, isEthLoading: false }),
    [selectOffset.toString()]: (state, action) => ({ ...state, offset: action.payload })
  },
  {
    selected: 'btc',
    offset: '4h',
    btc: [],
    eth: [],
    isBtcLoading: false,
    isEthLoading: false
  }
);

export const getCurrentCurrencyPurchase = state =>
  state.currency[getSelectedCurrency(state)][0] ? state.currency[getSelectedCurrency(state)][0].purchase : 0;
export const getCurrentCurrencySell = state =>
  state.currency[getSelectedCurrency(state)][0] ? state.currency[getSelectedCurrency(state)][0].sell : 0;
export const getSelectedCurrency = state => state.currency.selected;
export const getOffset = state => state.currency.offset;
