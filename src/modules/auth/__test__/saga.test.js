import { takeEvery } from "redux-saga/effects";
import { registrationFlow, loginFlow } from "../saga";
import { loginRequest, registrationRequest } from '../actions';

describe('Auth saga', () => {
  it('Запрос на регистрацию', () => {
    const iterator = registrationFlow();
    expect(iterator.next().value).toEqual(takeEvery(registrationRequest, expect.any(Function)));
  });

  it('Запрос на авторизацию', () => {
    const iterator = loginFlow();
    expect(iterator.next().value).toEqual(takeEvery(loginRequest, expect.any(Function)));
  });
});
