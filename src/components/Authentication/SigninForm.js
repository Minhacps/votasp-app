import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

class SigninForm extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <button>Entrar</button>
      </form>
    );
  }
}

export default SigninForm;
