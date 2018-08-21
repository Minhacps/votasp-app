import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import FormLayout from './FormLayout';
import SocialLogin from './SocialLogin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


class SigninForm extends PureComponent {

  constructor(props){
    super(props);
    this.state = {statusLogin: 'parado', errorMessage: null};
  }

  handleSubmit = event => {
    this.setState({statusLogin: 'realizando'});
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    this.updateErrorMessage(null);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.setState({statusLogin: 'parado'}))
      .catch((e) => {
        this.setState({erro: true, statusLogin: 'parado'});
        event.preventDefault();
        this.handleAuthenticationFailure(e);
      });
  };

  handleAuthenticationFailure = error => {
    switch (error.code) {
      case 'auth/invalid-email': {
        return this.updateErrorMessage('O formato do e-mail informado é inválido.');
      }

      case 'auth/user-disabled': {
        return this.updateErrorMessage('Usuário desabilitado.');
      }

      case 'auth/user-not-found':
      case 'auth/wrong-password': {
        return this.updateErrorMessage('Credenciais inválidas, e-mail ou senha estão incorretos.');
      }

      default: {
        return this.updateErrorMessage('Ocorreu um erro inesperado.');
      }
    }
  };

  updateErrorMessage = errorMessage => {
    this.setState({ errorMessage });
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
            <SocialLogin updateErrorMessage={this.updateErrorMessage} />

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
          <button className="authentication__submit-button">
            {this.state.statusLogin === 'parado' ? 'Entrar' : <FontAwesomeIcon icon={faSpinner} pulse/> }
          </button>
        </form>
      </FormLayout>
    );
  }
}

export default SigninForm;
