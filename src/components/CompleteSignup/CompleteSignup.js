import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auth0 from '../../Auth0/Auth0';

class CompleteSignup extends Component {
  state = {
    userProfile: 'voter'
  };

  handleSubmit = event => {
    event.preventDefault();

    const auth = new Auth0();

    const userMetadata = {
      userProfile: event.target.userProfile.value
    };

    auth.updateUserMetadata(userMetadata);
  };

  handleUserProfileChange = event => {
    const { value } = event.target;

    this.setState({
      userProfile: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Selecione seu perfil</p>
          <div>
            <label>
              <input
                type="radio"
                name="userProfile"
                value="voter"
                checked={this.state.userProfile === 'voter'}
                onChange={this.handleUserProfileChange}
              />
              Eleitora ou eleitor
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="userProfile"
                value="candidate"
                checked={this.state.userProfile === 'candidate'}
                onChange={this.handleUserProfileChange}
              />
              Candidata ou candidato
            </label>
          </div>
        </div>

        {this.state.userProfile === 'candidate' && (
          <React.Fragment>
            <div>
              <label htmlFor="">Deputado</label>
              <select name="candidateType">
                <option value="federal">Federal</option>
                <option value="estadual">Estadual</option>
              </select>
            </div>
            <div>
              <label htmlFor="">CNPJ</label>
              <input type="text" name="cnpj" />
            </div>

            <div>
              <label htmlFor="">Número</label>
              <input type="text" name="number" />
            </div>

            <div>
              <label htmlFor="">Partido</label>
              <select name="politicalParty" id="">
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
                <option value="PSOL">PSOL - PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO</option>
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

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CompleteSignup;
