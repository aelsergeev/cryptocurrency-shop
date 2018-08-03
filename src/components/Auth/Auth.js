import React, { PureComponent } from 'react';
import './Auth.css';
import logo from './image/Logo.svg';
import { Redirect } from "react-router-dom";

const authField = {
  false: {
    link: 'Войти',
    label: 'Впервые на сайте?',
    button: 'Зарегистрироваться'
  },
  true: {
    link: 'Зарегистрироваться',
    label: 'Уже зарегистрированы?',
    button: 'Войти'
  }
};

export default class Auth extends PureComponent {
  state = {
    auth: true,
    email: '',
    password: '',
    token: ''
  };

  render() {
    const { loginError, registrationError, isAuthorized } = this.props;
    const { auth, email, password } = this.state;
    const { link, label, button } = authField[auth];
    const error = auth ? loginError : registrationError;

    if (isAuthorized) {
      return (<Redirect to="/trade/btc" />)
    }

    return (
      <div className="login">
        <div className="auth">
          <img className="image" src={logo} alt="project logo" />
          <div className="form">
            <div className="fields">
              <div className="email">
                <span className="email-logo" />
                <input
                  type="email"
                  className="email-input"
                  value={email}
                  name="email"
                  placeholder="email"
                  onChange={this.handleEmail}
                />
              </div>
              <div className="pass">
                <span className="pass-logo" />
                <input
                  type="password"
                  className="pass-input"
                  value={password}
                  name="password"
                  placeholder="password"
                  onChange={this.handlePassword}
                />
              </div>
              {error ? <p className="auth-error">{error}</p> : null}
              <button className="auth-button" onClick={this.handleAuth}>
                {button}
              </button>
            </div>
          </div>
          <div className="change">
            <p>
              {label}{' '}
              <a href="" onClick={this.handleChangeForm}>
                {link}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  handleAuth = () => {
    const { loginRequest, registrationRequest } = this.props;
    const { auth, password, email } = this.state;

    if (auth) loginRequest({ email, password });
    else registrationRequest({ email, password });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeForm = event => {
    event.preventDefault();
    this.setState({ auth: !this.state.auth });
  };
}
