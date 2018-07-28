import { createActions, handleActions } from 'redux-actions';

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logout
} = createActions(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'REGISTRATION_REQUEST',
  'REGISTRATION_SUCCESS',
  'REGISTRATION_FAILURE',
  'LOGOUT'
);

export default handleActions(
  {
    [loginRequest.toString()]: state => ({ ...state, isAuthorized: false, loginError: null }),
    [loginSuccess.toString()]: state => ({ ...state, isAuthorized: true, loginError: null }),
    [loginFailure.toString()]: (state, action) => ({
      ...state,
      isAuthorized: false,
      loginError: action.payload.data.message
    }),
    [registrationRequest.toString()]: state => ({ ...state, isAuthorized: false, registrationError: null }),
    [registrationSuccess.toString()]: state => ({ ...state, isAuthorized: true, registrationError: null }),
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

export const errorParser = message => {
  if (message.password && message.email) return `password: ${message.password},\n email: ${message.email}`;
  else if (message.password) return `password: ${message.password}`;
  else if (message.email) return `email: ${message.email}`;
  else return message;
};
export const getIsAuthorized = state => state.auth.isAuthorized;
