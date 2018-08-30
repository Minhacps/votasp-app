import React, { Component } from 'react';
import firebase from 'firebase/app';

import PageLayout from '../components/PageLayout/PageLayout';
import cities from '../components/Authentication/cities';

import './Perfil.css';
import { CANDIDATE } from '../constants/userRoles';

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.authListener = null;
  }
  state = {
    userData: {}
  };

  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged(user => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(snapshot => {
          const userData = snapshot.data();

          if (userData.role !== CANDIDATE) {
            this.props.history.push('/app/questionario/1');
            return;
          }

          this.setState({ userData });
        });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userData } = this.state;
    const updatedData = this.formatUserData(event.target);
    const currentUser = firebase.auth().currentUser;
    const data = { ...userData, ...updatedData };

    this.saveData(data, currentUser).then(() => {
      this.authListener();
      this.props.history.push('/app/questionario/1');
    });
  };

  saveData = (data, currentUser) => {
    return firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .set({ ...data });
  };

  formatUserData = fields => {
    const { city, name } = this.props.userData || {};

    return {
      level: fields.level.value,
      cnpj: fields.cnpj.value.trim(),
      number: fields.number.value.trim(),
      politicalParty: fields.politicalParty.value,
      description: fields.description.value.trim(),
      city: city || fields.city.value,
      name: name || fields.name.value.trim()
    };
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    const { userData } = this.state;

    this.setState({
      userData: {
        ...userData,
        [name]: value
      }
    });
  };

  render() {
    const { userData } = this.state;

    return (
      <PageLayout>
        <form onSubmit={this.handleSubmit} className="edit-profile container">
          <h2>Atualizar perfil</h2>
          <div className="field-wrapper">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              required
              value={userData.name || ''}
              onChange={this.handleInputChange}
              autoFocus
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="city">Cidade</label>
            <select
              className="input"
              name="city"
              id="city"
              value={userData.city || ''}
              onChange={this.handleInputChange}
            >
              {cities.map(city => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="field-wrapper">
            <label htmlFor="level">Deputada(o)</label>
            <select
              id="level"
              name="level"
              className="input"
              value={userData.level || 'federal'}
              onChange={this.handleInputChange}
            >
              <option value="federal">Federal</option>
              <option value="estadual">Estadual</option>
            </select>
          </div>

          <div className="field-wrapper">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              className="input"
              required
              value={userData.cnpj || ''}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              className="input"
              required
              value={userData.number || ''}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="politicalParty">Partido</label>
            <select
              name="politicalParty"
              id="politicalParty"
              className="input"
              value={userData.politicalParty || ''}
              onChange={this.handleInputChange}
            >
              <option value="AVANTE"> AVANTE - Avante - 70 </option>
              <option value="DC"> DC - Democracia Cristã - 27 </option>
              <option value="DEM"> DEM - Democratas - 25 </option>
              <option value="MDB"> MDB - Movimento Democrático Brasileiro - 15 </option>
              <option value="PCB"> PCB - Partido Comunista Brasileiro - 21 </option>
              <option value="PCdoB"> PCdoB - Partido Comunista do Brasil - 65 </option>
              <option value="PCO"> PCO - Partido da Causa Operária - 29 </option>
              <option value="PMN"> PMN - Partido da Mobilização Nacional - 33 </option>
              <option value="PMB"> PMB - Partido da Mulher Brasileira[59] - 35 </option>
              <option value="PR">PR - Partido da República - 22 </option>
              <option value="PSDB">PSDB - Partido da Social Democracia Brasileira - 45 </option>
              <option value="PDT">PDT - Partido Democrático Trabalhista - 12 </option>
              <option value="PT">PT - Partido dos Trabalhadores - 13 </option>
              <option value="PHS">PHS - Partido Humanista da Solidariedade - 31 </option>
              <option value="NOVO">NOVO - Partido Novo[65] - 30 </option>
              <option value="PPL">PPL - Partido Pátria Livre - 54 </option>
              <option value="PPS">PPS - Partido Popular Socialista - 23 </option>
              <option value="PP">PP - Partido Progressista - 11 </option>
              <option value="PRTB">PRTB - Partido Renovador Trabalhista Brasileiro - 28 </option>
              <option value="PRB">PRB - Partido Republicano Brasileiro - 10 </option>
              <option value="PROS">PROS - Partido Republicano da Ordem Social - 90 </option>
              <option value="PRP">PRP - Partido Republicano Progressista - 44 </option>
              <option value="PSC">PSC - Partido Social Cristão - 20 </option>
              <option value="PSD">PSD - Partido Social Democrático - 55 </option>
              <option value="PSL">PSL - Partido Social Liberal - 17 </option>
              <option value="PSOL">PSOL - Partido Socialismo e Liberdade - 50 </option>
              <option value="PSB">PSB - Partido Socialista Brasileiro - 40 </option>
              <option value="PSTU">
                PSTU - Partido Socialista dos Trabalhadores Unificado - 16{' '}
              </option>
              <option value="PTB">PTB - Partido Trabalhista Brasileiro - 14 </option>
              <option value="PTC">PTC - Partido Trabalhista Cristão - 36 </option>
              <option value="PV">PV - Partido Verde - 43 </option>
              <option value="PATRI">PATRI - Patriota - 51 </option>
              <option value="PODE">PODE - Podemos - 19 </option>
              <option value="REDE">REDE - Rede Sustentabilidade - 18 </option>
              <option value="SD">SD - Solidariedade - 77 </option>
            </select>
          </div>

          <div className="field-wrapper">
            <label htmlFor="description">
              Descrição <small>(opcional)</small>
            </label>
            <textarea
              name="description"
              id="description"
              maxLength={500}
              className="input"
              value={userData.description}
              onChange={this.handleInputChange}
            />
          </div>
          <footer className="complete-signup__footer">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </footer>
        </form>
      </PageLayout>
    );
  }
}

export default Perfil;
