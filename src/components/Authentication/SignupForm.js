import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import cities from './cities';

class SignupForm extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
      city: event.target.city.value,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        firebase.firestore().collection('users').doc(response.user.uid).set({
          name: values.name,
          city: values.city,
        });
      })
      .catch(console.error);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <button type="button" onClick={() => this.props.showLoginPage(true)}>
            Entrar
          </button>
          <button type="button" onClick={() => this.props.showLoginPage(false)}>
            Cadastrar
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <select name="city" id="city">
            {cities.map(city => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <button>Cadastrar</button>
      </form>
    );
  }
}

export default SignupForm;
