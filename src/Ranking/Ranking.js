import React, { Component } from 'react';
import firebase from 'firebase/app';

import Candidate from './Candidate/Candidate';

class Ranking extends Component {
  state = {
    activeTab: 'Estadual',
    data: [{
      name: 'ALESSANDRA FACEX',
      number: 1092,
      politicalParty: 'PRB',
      photoUrl: 'http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2018/BR/SP/2022802018/250000606276/foto_1533933394792.jpg',
      level: 'Federal',
      ranking: 100.00
    },
    {
      name: 'BARBA',
      number: 13110,
      politicalParty: 'PT',
      photoUrl: 'http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2018/BR/SP/2022802018/250000624061/foto_1534341730918.jpg',
      level: 'Estadual',
      ranking: 13.12
    },
    {
      name: 'PAULO BUFALO',
      number: 50777,
      politicalParty: 'PSOL',
      photoUrl: 'http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2018/BR/SP/2022802018/250000601559/foto_1533659501365.jpg',
      level: 'Estadual',
      ranking: 95.35
    }
    ]
  }

  componentDidMount() {
    let data = {
      "data": {
        "1": "CP",
        "2": "DP",
        "3": "DP",
        "4": "DP",
        "5": "D",
        "6": "C",
        "7": "D",
        "8": "D",
        "9": "DP",
        "10": "D",
        "11": "D",
        "12": "DP",
        "13": "C",
        "14": "DP",
        "15": "CP",
        "16": "DP",
        "17": "DP",
        "18": "CP",
        "19": "C",
        "20": "C",
        "21": "DP",
        "22": "D",
        "23": "D",
        "24": "D",
        "25": "DP",
        "26": "DP",
        "27": "C",
        "28": "C",
        "29": "CP",
        "30": "C",
        "31": "D",
        "32": "CP",
        "33": "CP",
        "34": "D",
        "35": "D",
        "36": "D",
        "37": "D",
        "38": "D",
        "39": "CP",
        "40": "CP"
      }
    };
    // console.log("teste");
    require("firebase/functions");
    var functions = firebase.functions();
    console.log(firebase);
    console.log(functions);

    var getTopMatches = firebase.functions().httpsCallable('getTopMatches');
    getTopMatches(data).then(function (result) {
      // Read result of the Cloud Function.
      // var sanitizedMessage = result.data.text;
      console.log(result);
    }).catch(function(error) {
      // Getting the Error details.
      var code = error.code;
      var message = error.message;
      var details = error.details;
      console.log(code);
      console.log(message);
      console.log(details);
      // ...
    });;
  }

  handleTabChange() {
    if (this.state) {
      let activeTab = 'Estadual';
      // console.log(this.state);
      if (activeTab === 'Estadual') {
        this.setState({ activeTab: 'Federal' })
      } else {
        this.setState({ activeTab: 'Estadual' })
      };
    }
  }

  render() {
    let candidatesPage = [];
    this.state.data.forEach(deputy => {
      // console.log("Level:", deputy.level);
      // console.log("Active Tab:", this.state.activeTab);
      if (this.state.activeTab === deputy.level) {
        candidatesPage.push(
          <Candidate
            key={deputy.number}
            name={deputy.name}
            number={deputy.number}
            politicalParty={deputy.politicalParty}
            ranking={deputy.ranking}
            photoUrl={deputy.photoUrl}
            alt={deputy.number}
          />
        )
      }
    });

    // console.log("Candidate Page:", candidatesPage);

    return (
      <React.Fragment>
        <h3>Ranking</h3>
        <p>Veja os candidatos e candidatas que pensam mais parecido com você.</p>
        <button onClick={this.handleTabChange}>Deputado Federal</button>
        <button onClick={this.handleTabChange}>Deputado Estadual</button>
        <section>
          {candidatesPage}
        </section>
        <section>

        </section>
      </React.Fragment>
    );
  }
}

export default Ranking;
