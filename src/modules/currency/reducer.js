import { handleActions } from 'redux-actions';
import {
  fetchBtcFailure,
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchEthFailure,
  fetchEthRequest,
  fetchEthSuccess,
  selectBtc,
  selectEth,
  selectOffset
} from './actions';

export default handleActions(
  {
    [selectBtc.toString()]: state => ({ ...state, selected: 'btc' }),
    [selectEth.toString()]: state => ({ ...state, selected: 'eth' }),
    [fetchBtcRequest.toString()]: state => ({ ...state, isBtcLoading: true }),
    [fetchEthRequest.toString()]: state => ({ ...state, isEthLoading: true }),
    [fetchBtcSuccess.toString()]: (state, action) => ({
      ...state,
      isBtcLoading: false,
      btc: action.payload
    }),
    [fetchEthSuccess.toString()]: (state, action) => ({
      ...state,
      isEthLoading: false,
      eth: action.payload
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
