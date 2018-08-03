import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationSuccess,
  registrationFailure,
  registrationRequest
} from '../actions';
import reducer from '../reducer';

const initState = { isAuthorized: false, loginError: null, registrationError: null };

describe('Auth reducer', () => {
  describe('Login', () => {
    describe('Action loginRequest', () => {
      it('Change key isAuthorized', () => {
        const state = reducer({ ...initState, isAuthorized: true }, loginRequest());
        expect(state.isAuthorized).toBeFalsy();
      });

      it('Clear key loginError', () => {
        const state = reducer({ ...initState, loginError: true }, loginRequest());
        expect(state.loginError).toBeNull();
      });
    });

    describe('Action loginSuccess', () => {
      it('Change key isAuthorized', () => {
        const state = reducer(initState, loginSuccess());
        expect(state.isAuthorized).toBeTruthy();
      });
    });

    describe('Action loginFailure', () => {
      it('Change key isAuthorized', () => {
        const state = reducer({ ...initState, isAuthorized: true }, loginFailure({ data: { message: {} } }));
        expect(state.isAuthorized).toBeFalsy();
      });

      it('Set info to loginError', () => {
        const state = reducer(initState, loginFailure({ data: { message: true } }));
        expect(state.loginError).toBeTruthy();
      });
    });
  });

  describe('Registration', () => {
    describe('Action registrationRequest', () => {
      it('Change key isAuthorized', () => {
        const state = reducer({ ...initState, isAuthorized: true }, registrationRequest());
        expect(state.isAuthorized).toBeFalsy();
      });

      it('Clear key registrationError', () => {
        const state = reducer({ ...initState, registrationError: true }, registrationRequest());
        expect(state.registrationError).toBeNull();
      });
    });

    describe('Action registrationSuccess', () => {
      it('Change key isAuthorized', () => {
        const state = reducer(initState, registrationSuccess());
        expect(state.isAuthorized).toBeTruthy();
      });
    });

    describe('Action registrationFailure', () => {
      it('Change key isAuthorized', () => {
        const state = reducer({ ...initState, isAuthorized: true }, registrationFailure({ data: { message: true } }));
        expect(state.isAuthorized).toBeFalsy();
      });

      it('Set info to registrationError', () => {
        const state = reducer(initState, registrationFailure({ data: { message: true } }));
        expect(state.registrationError).toBeTruthy();
      });
    });
  });

  describe('Logout', () => {
    describe('Action logout', () => {
      it('Change key isAuthorized', () => {
        const state = reducer({ ...initState, isAuthorized: true }, logout());
        expect(state.isAuthorized).toBeFalsy();
      });
    });
  });
});
