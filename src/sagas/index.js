import { fork } from 'redux-saga/effects';
import { authFlow, loginFlow, registrationFlow } from './auth';

export default function*() {
  yield fork(authFlow);
  yield fork(loginFlow);
  yield fork(registrationFlow);
}
