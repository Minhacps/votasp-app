import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompleteSignup extends Component {
  state = {
    isCandidate: true
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleIsCandidateChange = () => {
    this.setState({
      isCandidate: !this.state.isCandidate
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="checkbox"
          name="isCandidate"
          checked={this.state.isCandidate}
          onChange={this.handleIsCandidateChange}
        />

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
            <option value="pt">PT</option>
            <option value="psdb">PSDB</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CompleteSignup;
