import React, { Component } from 'react';

import { VOTER, CANDIDATE } from '../../constants/userRoles';
import politicalParties from '../../constants/politicalParties';
import cities from '../Authentication/cities';

import './CompleteSignupForm.css';

class CompleteSignupForm extends Component {
  state = {
    role: VOTER
  };

  handleUserRoleChange = event => {
    const { value } = event.target;

    this.setState({
      role: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="complete-signup__background" />
        <section className="complete-signup">
          <header className="complete-signup__header">
            <h2>Olá!</h2>
            <p>
              Ficamos muito feliz pelo seu interesse no Vota SP. Precisamos apenas de mais alguns
              dados para finalizar seu cadastro.
            </p>
          </header>
          <form onSubmit={this.props.onSubmit} className="">
            <p className="user-profile__title">Selecione uma opção</p>
            <div className="user-profile">
              <div className="user-profile-field">
                <input
                  type="radio"
                  id="roleVoter"
                  name="role"
                  value={VOTER}
                  checked={this.state.role === VOTER}
                  onChange={this.handleUserRoleChange}
                />
                <label htmlFor="roleVoter">Vou votar</label>
              </div>
              <div className="user-profile-field">
                <input
                  type="radio"
                  id="roleCandidate"
                  name="role"
                  value={CANDIDATE}
                  checked={this.state.role === CANDIDATE}
                  onChange={this.handleUserRoleChange}
                />
                <label htmlFor="roleCandidate">Vou me candidatar</label>
              </div>
            </div>

            {(!this.props.userData || !this.props.userData.city) && (
              <div className="field-wrapper">
                <label htmlFor="city">Cidade</label>
                <select id="city" name="city" className="input">
                  {cities.map(city => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {(!this.props.userData || !this.props.userData.name) && (
              <div className="field-wrapper">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" className="input" required />
              </div>
            )}

            {this.state.role === CANDIDATE && (
              <React.Fragment>
                <div className="field-wrapper">
                  <label htmlFor="level">Deputada(o)</label>
                  <select id="level" name="level" className="input">
                    <option value="federal">Federal</option>
                    <option value="estadual">Estadual</option>
                  </select>
                </div>

                <div className="field-wrapper">
                  <label htmlFor="partyNumber">Partido</label>
                  <select name="partyNumber" id="partyNumber" className="input">
                    {Object.keys(politicalParties).map(number => {
                      const currentParty = politicalParties[number];
                      return (
                        <option value={number} key={number}>
                          {number} - {currentParty.initials} - {currentParty.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="field-wrapper">
                  <label htmlFor="number">Número</label>
                  <input type="text" id="number" name="number" className="input" required />
                </div>

                <div className="field-wrapper">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input type="text" id="cnpj" name="cnpj" className="input" required />
                </div>

                <div className="field-wrapper">
                  <label htmlFor="description">
                    Descrição <small>(opcional)</small>
                  </label>
                  <textarea name="description" id="description" maxLength={500} className="input" />
                </div>
              </React.Fragment>
            )}

            <footer className="complete-signup__footer">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </footer>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default CompleteSignupForm;
