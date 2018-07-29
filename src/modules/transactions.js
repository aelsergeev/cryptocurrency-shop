import { createActions, handleActions } from 'redux-actions';

export const {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure,
} = createActions(
  'FETCH_USER_TRANSACTIONS_REQUEST',
  'FETCH_USER_TRANSACTIONS_SUCCESS',
  'FETCH_USER_TRANSACTIONS_FAILURE',
);

export default handleActions(
  {
    [fetchUserTransactionsRequest.toString()]: state => ({ ...state }),
    [fetchUserTransactionsSuccess.toString()]: state => ({ ...state }),
    [fetchUserTransactionsFailure.toString()]: state => ({ ...state }),
  },
  {
    isLoading: false,
    records: []
  }
);