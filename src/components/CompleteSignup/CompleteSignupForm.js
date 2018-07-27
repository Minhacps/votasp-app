import React, { Component } from 'react';

import { VOTER, CANDIDATE } from '../../constants/userRoles';
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
                  <label htmlFor="cnpj">CNPJ</label>
                  <input type="text" id="cnpj" name="cnpj" className="input" required />
                </div>

                <div className="field-wrapper">
                  <label htmlFor="number">Número</label>
                  <input type="text" id="number" name="number" className="input" required />
                </div>

                <div className="field-wrapper">
                  <label htmlFor="politicalParty">Partido</label>
                  <select name="politicalParty" id="politicalParty" className="input">
                    <option value="AVANTE">AVANTE - AVANTE</option>
                    <option value="DC">DC - DEMOCRACIA CRISTÃ</option>
                    <option value="DEM">DEM - DEMOCRATAS</option>
                    <option value="MDB">MDB - MOVIMENTO DEMOCRÁTICO BRASILEIRO</option>
                    <option value="NOVO">NOVO - PARTIDO COMUNISTA BRASILEIRO</option>
                    <option value="PATRI">PATRI - PARTIDO COMUNISTA DO BRASIL</option>
                    <option value="PCB">PCB - PARTIDO DA CAUSA OPERÁRIA</option>
                    <option value="PCdoB">PCdoB - PARTIDO DA MOBILIZAÇÃO NACIONAL</option>
                    <option value="PCO">PCO - PARTIDO DA MULHER BRASILEIRA</option>
                    <option value="PDT">PDT - PARTIDO DA REPÚBLICA</option>
                    <option value="PHS">PHS - PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA</option>
                    <option value="PMB">PMB - PARTIDO DEMOCRÁTICO TRABALHISTA</option>
                    <option value="PMN">PMN - PARTIDO DOS TRABALHADORES</option>
                    <option value="PODE">PODE - PARTIDO HUMANISTA DA SOLIDARIEDADE</option>
                    <option value="PP">PP - PARTIDO NOVO</option>
                    <option value="PPL">PPL - PARTIDO PÁTRIA LIVRE</option>
                    <option value="PPS">PPS - PARTIDO POPULAR SOCIALISTA</option>
                    <option value="PR">PR - PARTIDO PROGRESSISTA</option>
                    <option value="PRB">PRB - PARTIDO RENOVADOR TRABALHISTA BRASILEIRO</option>
                    <option value="PROS">PROS - PARTIDO REPUBLICANO BRASILEIRO</option>
                    <option value="PRP">PRP - PARTIDO REPUBLICANO DA ORDEM SOCIAL</option>
                    <option value="PRTB">PRTB - PARTIDO REPUBLICANO PROGRESSISTA</option>
                    <option value="PSB">PSB - PARTIDO SOCIAL CRISTÃO</option>
                    <option value="PSC">PSC - PARTIDO SOCIAL DEMOCRÁTICO</option>
                    <option value="PSD">PSD - PARTIDO SOCIAL LIBERAL</option>
                    <option value="PSDB">PSDB - PARTIDO SOCIALISMO E LIBERDADE</option>
                    <option value="PSL">PSL - PARTIDO SOCIALISTA BRASILEIRO</option>
                    <option value="PSOL">
                      PSOL - PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO
                    </option>
                    <option value="PSTU">PSTU - PARTIDO TRABALHISTA BRASILEIRO</option>
                    <option value="PT">PT - PARTIDO TRABALHISTA CRISTÃO</option>
                    <option value="PTB">PTB - PARTIDO VERDE</option>
                    <option value="PTC">PTC - PATRIOTA</option>
                    <option value="PV">PV - PODEMOS</option>
                    <option value="REDE">REDE - REDE SUSTENTABILIDADE</option>
                    <option value="SD">SD - SOLIDARIEDADE</option>
                  </select>
                </div>

                <div className="field-wrapper">
                  <label htmlFor="description">Descrição <small>(opcional)</small></label>
                  <textarea name="description" id="description" maxLength={500} className="input"></textarea>
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
