import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import cities from './cities';

import FormLayout from './FormLayout';

class SignupForm extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
      city: event.target.city.value
    };

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
      .catch(console.error);
  };

  render() {
    return (
      <FormLayout showLoginPage={this.props.showLoginPage} activeTab="signup">
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

          <button className="authentication__submit-button">Cadastrar</button>
        </form>
      </FormLayout>
    );
  }
}

export default SignupForm;
