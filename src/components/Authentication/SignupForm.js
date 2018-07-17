import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import cities from './cities';

class SignupForm extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(console.log);
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
          <label htmlFor="cidade">Cidade</label>
          <select name="cidade" id="cidade">
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
