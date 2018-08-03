import { handleActions } from 'redux-actions';
import { errorParser } from './selector';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logout,
  registrationFailure,
  registrationRequest,
  registrationSuccess
} from './actions';

export default handleActions(
  {
    [loginRequest.toString()]: state => ({ ...state, isAuthorized: false, loginError: null }),
    [loginSuccess.toString()]: state => ({ ...state, isAuthorized: true }),
    [loginFailure.toString()]: (state, action) => ({
      ...state,
      isAuthorized: false,
      loginError: action.payload.data.message
    }),
    [registrationRequest.toString()]: state => ({ ...state, isAuthorized: false, registrationError: null }),
    [registrationSuccess.toString()]: state => ({ ...state, isAuthorized: true }),
    [registrationFailure.toString()]: (
      state,
      {
        payload: {
          data: { message }
        }
      }
    ) => ({
      ...state,
      isAuthorized: false,
      registrationError: errorParser(message)
    }),
    [logout.toString()]: state => ({ ...state, isAuthorized: false })
  },
  { isAuthorized: false, loginError: null, registrationError: null }
);
