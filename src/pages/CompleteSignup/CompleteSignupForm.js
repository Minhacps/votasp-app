import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auth0 from '../../Auth0/Auth0';

import './CompleteSignupForm.css';

class CompleteSignupForm extends Component {
  state = {
    userProfile: 'candidate'
  };

  handleUserProfileChange = event => {
    const { value } = event.target;

    this.setState({
      userProfile: value
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
                  id="userProfileVoter"
                  name="userProfile"
                  value="voter"
                  checked={this.state.userProfile === 'voter'}
                  onChange={this.handleUserProfileChange}
                />
                <label htmlFor="userProfileVoter">Vou votar</label>
              </div>
              <div className="user-profile-field">
                <input
                  type="radio"
                  id="userProfileCandidate"
                  name="userProfile"
                  value="candidate"
                  checked={this.state.userProfile === 'candidate'}
                  onChange={this.handleUserProfileChange}
                />
                <label htmlFor="userProfileCandidate">Vou me candidatar</label>
              </div>
            </div>

            {this.state.userProfile === 'candidate' && (
              <React.Fragment>
                <div className="field-wrapper">
                  <label htmlFor="candidateType">Deputada(o)</label>
                  <select id="candidateType" name="candidateType" className="input">
                    <option value="federal">Federal</option>
                    <option value="estadual">Estadual</option>
                  </select>
                </div>

                <div className="field-wrapper">
                  <label htmlFor="candidateCnpj">CNPJ</label>
                  <input
                    type="text"
                    id="candidateCnpj"
                    name="candidateCnpj"
                    className="input"
                    required
                  />
                </div>

                <div className="field-wrapper">
                  <label htmlFor="candidateNumber">Número</label>
                  <input
                    type="text"
                    id="candidateNumber"
                    name="candidateNumber"
                    className="input"
                    required
                  />
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
