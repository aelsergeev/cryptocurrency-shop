import Auth from "../Auth";
import React from "react";
import { shallow } from "enzyme";

describe('Component <Auth />', () => {
  const wrapper = shallow(<Auth />);
  wrapper.setState({
    auth: true,
    email: '',
    password: '',
    token: ''
  });

  it('Does exist input[type=email]', () => {
    expect(wrapper.find('input[type="email"]')).toHaveLength(1);
  });

  it('Does exist input[type=password]', () => {
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
  });

  it('Does form changed to registration', () => {
    wrapper.setState({ auth: false });
    expect(wrapper.find('.auth-button').text()).toEqual('Зарегистрироваться');
  });

  it('Does form changed to login', () => {
    wrapper.setState({ auth: true });
    expect(wrapper.find('.auth-button').text()).toEqual('Войти');
  });
});