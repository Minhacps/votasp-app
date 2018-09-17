import React, { Component } from 'react';
import firebase from 'firebase/app';
import Select from "react-virtualized-select";

import cities from './cities';

import FormLayout from './FormLayout';

import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";

class SignupForm extends Component {
  state = {
    errorMessage: null,
    selectedCity: null,
  };

  handleChangeCity = (selectedCity) => {
    this.setState({ selectedCity });
  }

  allCities = () => {
    const citiesOptions = cities.map(city => (
      {
        value: city,
        label: city,
      }
    ));

    return citiesOptions;
  }

  handleSubmit = event => {
    event.preventDefault();

    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
      city: this.state.selectedCity.value,
    };

    this.updateErrorMessage(null);

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async ({ user }) => {
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
      })
      .catch(this.handleSignupFailure);
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
    const options = this.allCities();

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
              <Select
                placeholder="Selecione sua cidade"
                options={options}
                value={this.state.selectedCity}
                onChange={this.handleChangeCity}
              />
            </div>
          </div>

          <button className="authentication__submit-button">Cadastrar</button>
        </form>
      </FormLayout>
    );
  }
}

export default SignupForm;
