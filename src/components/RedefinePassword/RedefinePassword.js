import React, { Component } from 'react';
import firebase from 'firebase/app';
import PageLayout from '../PageLayout/PageLayout';

import FormLayout from '../Authentication/FormLayout';

import './RedefinePassword.scss';

class RedefinePassword extends Component {
  state = {
    isLoading: false,
    successMessage: null,
    errorMessage: null
  };

  onSubmit = event => {
    event.preventDefault();

    const emailAddress = event.target.email.value;
    const auth = firebase.auth();

    this.setState({ isLoading: true });

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(doc => {
        this.handleSendEmailSuccess();
      })
      .catch(this.handleSendEmailFailure);
  };

  handleSendEmailSuccess = () => {
    return this.updateSuccessMessage('Email enviado com sucesso.');
  };

  handleSendEmailFailure = error => {
    console.log(error);
    switch (error.code) {
      case 'auth/invalid-email': {
        return this.updateErrorMessage('O formato do e-mail informado é inválido.');
      }
      case 'auth/user-disabled': {
        return this.updateErrorMessage('Usuário desabilitado.');
      }

      case 'auth/user-not-found': {
        return this.updateErrorMessage('E-mail não encontrado na base de dados.');
      }

      default: {
        return this.updateErrorMessage('Ocorreu um erro inesperado.');
      }
    }
  };

  updateSuccessMessage = successMessage => {
    this.setState({ successMessage, errorMessage: null, isLoading: false });
  };

  updateErrorMessage = errorMessage => {
    this.setState({ errorMessage, successMessage: null, isLoading: false });
  };

  render() {
    return (
      <FormLayout
        hideTabs
        successMessage={this.state.successMessage}
        errorMessage={this.state.errorMessage}
      >
        <h1 className="redefine-password__title">Recuperação de senha</h1>
        <form onSubmit={this.onSubmit}>
          <section className="authentication__form-content">
            <div className="field-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="input"
                name="email"
                id="email"
                required
                placeholder="Informe o e-mail cadastrado"
              />
            </div>
          </section>
          <button className="authentication__submit-button" disabled={this.state.isLoading}>
            Recuperar senha
          </button>
        </form>
      </FormLayout>
    );
  }
}

export default RedefinePassword;
