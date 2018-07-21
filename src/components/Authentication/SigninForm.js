import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import FormLayout from './FormLayout';
import SocialLogin from './SocialLogin';

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
      <FormLayout showLoginPage={this.props.showLoginPage} activeTab="signin">
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
