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
    [getUserInfoRequest.toString()]: state => {},
    [getUserInfoSuccess.toString()]: state => {},
    [getUserInfoFailure.toString()]: state => {},
  },
  {
    info: null,
    isLoading: false,
    error: null
  }
);