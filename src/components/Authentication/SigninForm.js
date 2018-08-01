import React, { Component } from 'react';
import firebase from 'firebase/app';

import FormLayout from './FormLayout';
import SocialLogin from './SocialLogin';

class SigninForm extends Component {
  state = {
    errorMessage: null
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ errorMessage: null });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(this.handleAuthenticationFailure);
  };

  handleAuthenticationFailure = error => {
    switch (error.code) {
      case 'auth/invalid-email': {
        return this.setState({ errorMessage: 'O formato do e-mail informado é inválido.' });
      }

      case 'auth/user-disabled': {
        return this.setState({ errorMessage: 'Usuário desabilitado.' });
      }

      case 'auth/user-not-found':
      case 'auth/wrong-password': {
        return this.setState({
          errorMessage: 'Credenciais inválidas, e-mail ou senha estão incorretos.'
        });
      }

      default: {
        return this.setState({ errorMessage: 'Ocorreu um erro inesperado.' });
      }
    }
  };

  render() {
    return (
      <FormLayout
        showLoginPage={this.props.showLoginPage}
        activeTab="signin"
        errorMessage={this.state.errorMessage}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="authentication__form-content">
            <SocialLogin />

            <p className="authentication__separator">ou</p>

            <div className="field-wrapper">
              <label htmlFor="email">E-mail</label>
              <input type="text" className="input" name="email" id="email" required />
            </div>

            <div className="field-wrapper">
              <label htmlFor="password">Senha</label>
              <input type="password" className="input" name="password" id="password" required />
            </div>
          </div>
          <button className="authentication__submit-button">Entrar</button>
        </form>
      </FormLayout>
    );
  }
}

export default SigninForm;
