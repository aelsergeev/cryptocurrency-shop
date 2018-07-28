import React, { PureComponent } from 'react';
import './Auth.css';
import logo from './image/Logo.svg';

const authField = {
  false: {
    a: 'Войти',
    p: 'Впервые на сайте?',
    button: 'Зарегистрироваться'
  },
  true: {
    a: 'Зарегистрироваться',
    p: 'Уже зарегистрированы?',
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
    const { loginError, registrationError } = this.props;
    const { auth, email, password } = this.state;
    const { a, p, button } = authField[auth];
    const error = auth ? loginError : registrationError;

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
              {p}{' '}
              <a href="" onClick={this.handleChangeForm}>
                {a}
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
