import { createActions, handleActions } from 'redux-actions';

export const {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} = createActions(
  'FETCH_USER_TRANSACTIONS_REQUEST',
  'FETCH_USER_TRANSACTIONS_SUCCESS',
  'FETCH_USER_TRANSACTIONS_FAILURE'
);

export default handleActions(
  {
    [fetchUserTransactionsRequest.toString()]: state => ({ ...state, isLoading: true }),
    [fetchUserTransactionsSuccess.toString()]: (state, action) => ({
      ...state,
      isLoading: false,
      records: action.payload
    }),
    [fetchUserTransactionsFailure.toString()]: (state, action) => ({ ...state, isLoading: false, error: action.error })
  },
  {
    isLoading: false,
    records: [],
    error: null
  }
);
