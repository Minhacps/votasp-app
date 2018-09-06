import React, { Component } from 'react';
import firebase from 'firebase/app';
import PageLayout from '../PageLayout/PageLayout';

import FormLayout from '../Authentication/FormLayout';

import './RedefinePassword.scss';

class RedefinePassword extends Component {
  state = {
    successMessage: null,
    errorMessage: null
  };

  onSubmit = event => {
    event.preventDefault();
    const emailAddress = event.target.email.value;
    var auth = firebase.auth();
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
    this.setState({ successMessage, errorMessage: null });
  };

  updateErrorMessage = errorMessage => {
    this.setState({ errorMessage, successMessage: null });
  };

  render() {
    return (
      <FormLayout
        hideTabs
        successMessage={this.state.successMessage}
        errorMessage={this.state.errorMessage}
      >
        <h1 className="redefine-password__title">Recuperação de senha</h1>
        <section className="authentication__form-content">
          <form onSubmit={this.onSubmit}>
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
          </form>
        </section>
        <button className="authentication__submit-button">Recuperar senha</button>
      </FormLayout>
    );
  }
}

export default RedefinePassword;
