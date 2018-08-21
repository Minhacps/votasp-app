import React, { Component } from 'react';
import Candidate from './Candidate/Candidate';

import firebase from 'firebase/app';
import functions from 'firebase/functions';

class Ranking extends Component {

  constructor(props) {
    super(props);
    this.authListener = null;
  }

  state = {
    activeTab: 'Estadual',
    candidates: [],
    loading: true
  }

  componentDidMount() {

    let data = {
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
    };
    // console.log(firebase);
    let candidates = [];
    this.authListener = firebase.auth().onAuthStateChanged(user => {
      var getTopMatches = firebase.functions().httpsCallable('getTopMatches');
      getTopMatches(data).then(function (result) {
        let results = result.data;
        // console.log(results);
        results.forEach(candidate => {
          let candidateId = candidate.candidateId;
          firebase
            .firestore()
            .collection("users")
            .doc(candidateId)
            .get().then(function (doc) {
              // console.log(doc);
              if (doc.exists) {
                // console.log("Document data:", doc.data());
                candidate.name = doc.data().name;
                candidate.politicalParty = doc.data().politicalParty;
                candidate.number = doc.data().number;
                candidate.level = doc.data().level;
                candidates.push(candidate);
              } else {
                console.log("Documento não existe!");
              }
            }).catch(function (error) {
              console.log("Erro ao tentar coletar o documento:", error);
            });
        });
      });
      this.setState({ candidates });
      this.setState({ loading: false });
      console.log('State', this.state.candidates);
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  handleTabChange() {
    if (this.state) {
      let activeTab = 'Estadual';
      console.log(this.state);
      if (activeTab === 'Estadual') {
        this.setState({ activeTab: 'Federal' })
      } else {
        this.setState({ activeTab: 'Estadual' })
      };
    }
  }

  render() {
    let candidatesPage = [];
    const { candidatesData } = this.state.candidates;

    console.log("Impressão de dentro do render", candidatesData);
    // if (this.state.loading) {
    //   console.log("Loading");

    // } else {
    //   let candidates = [...this.state.candidates];
    //   console.log("Passei pelo render dentro do if");
    //   console.log("candidates", candidates);
    //   console.log("Candidates length", candidates.length);
    //   candidates.forEach(deputy => {
    //     console.log("Level:", deputy.level);
    //     // console.log("Active Tab:", this.state.activeTab);
    //     // if (this.state.activeTab === deputy.level) {
    //     //   candidatesPage.push(
    //     //     <Candidate
    //     //       key={deputy.number}
    //     //       name={deputy.name}
    //     //       number={deputy.number}
    //     //       politicalParty={deputy.politicalParty}
    //     //       ranking={deputy.ranking}
    //     //       photoUrl={deputy.photoUrl}
    //     //       alt={deputy.number}
    //     //     />
    //     //   )
    //     // }
    //   });
    // }


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