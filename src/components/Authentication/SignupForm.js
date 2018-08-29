import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import cities from './cities';

import FormLayout from './FormLayout';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

class SignupForm extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      errorMessage: null,
      statusCadastro: 'parado',
    };
  }

  handleSubmit = async (event) => {
    try {
      this.setState({statusCadastro: 'realizando'});
      event.preventDefault();
      const values = {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        city: event.target.city.value
      };
      this.updateErrorMessage(null);
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          name: values.name,
          email: values.email,
          city: values.city
        });
      await user.updateProfile({ displayName: values.name });
      this.setState({statusCadastro: 'parado'});
    } catch (e) {
      this.setState({statusCadastro: 'parado'});
      this.handleSignupFailure(e);
    }
  };

  handleSignupFailure = error => {
    switch (error.code) {
      case 'auth/email-already-in-use': {
        return this.updateErrorMessage('Este e-mail já está em uso.');
      }

      case 'auth/invalid-email': {
        return this.updateErrorMessage('O formato do e-mail informado é inválido.');
      }

      case 'auth/weak-password': {
        return this.updateErrorMessage('Sua senha deve ter no mínimo 6 caracteres.');
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
        activeTab="signup"
        errorMessage={this.state.errorMessage}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="authentication__form-content">
            <div className="field-wrapper">
              <label htmlFor="name">Nome</label>
              <input type="text" className="input" name="name" id="name" />
            </div>

            <div className="field-wrapper">
              <label htmlFor="email">E-mail</label>
              <input type="text" className="input" name="email" id="email" />
            </div>

            <div className="field-wrapper">
              <label htmlFor="password">Senha</label>
              <input type="password" className="input" name="password" id="password" />
            </div>

            <div className="field-wrapper">
              <label htmlFor="city">Cidade</label>
              <select className="input" name="city" id="city">
                {cities.map(city => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="authentication__submit-button">
            {this.state.statusCadastro === 'parado' ? 'Cadastrar' : <FontAwesomeIcon icon={faSpinner} pulse/> }
          </button>
        </form>
      </FormLayout>
    );
  }
}

export default SignupForm;
