import { createActions, handleActions } from 'redux-actions';

export const {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} = createActions(
  'GET_USER_INFO_REQUEST',
  'GET_USER_INFO_SUCCESS',
  'GET_USER_INFO_FAILURE',
);

export default handleActions(
  {
    [getUserInfoRequest.toString()]: state => ({ ...state, isLoading: true }),
    [getUserInfoSuccess.toString()]: (state, action) => ({ ...state, info: action.payload, isLoading: false }),
    [getUserInfoFailure.toString()]: (state, action) => ({ ...state, error: action.error, isLoading: false }),
  },
  {
    info: null,
    isLoading: false,
    error: null
  }
);