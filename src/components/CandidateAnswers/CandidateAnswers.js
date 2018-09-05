import React, { Component } from 'react';
import firebase from 'firebase/app';
import './CandidateAnswers.scss';
import questions from '../../Questionario/questoes';
import PageLayout from '../PageLayout/PageLayout';
import Loader from '../Loader/Loader';

class CandidateAnswers extends Component {

  state = {
    candidate: {},
    loading: true,
  }

  componentDidMount() {
    const candidateId = this.props.match.params.id;
    this.authListener = firebase.auth().onAuthStateChanged(user => {
      firebase
        .firestore()
        .collection('users')
        .doc(candidateId)
        .onSnapshot(snapshot => {
          const candidate = snapshot.data();
          firebase
            .firestore()
            .collection('candidate_justifications')
            .doc(candidateId)
            .onSnapshot(snapshot => {
              const justifications = snapshot.data();
              candidate.justifications = justifications;
              firebase
                .firestore()
                .collection('candidate_answers')
                .doc(candidateId)
                .onSnapshot(snapshot => {
                  const candidate_answers = snapshot.data();
                  candidate.answers = candidate_answers;
                  this.setState({ candidate, loading: false });
                });
            });
        });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { loading } = this.state;

    let candidate = this.state.candidate;
    let page = [];
    if (candidate.answers) {
      let answers = { ...candidate.answers };
      var answersSize = Object.keys(answers).length;
      for (let i = 1; i <= answersSize; i++) {
        switch (answers[i]) {
          case 'DP': answers[i] = 'Discordo Plenamente'; break;
          case 'D': answers[i] = 'Discordo'; break;
          case 'C': answers[i] = 'Concordo'; break;
          case 'CP': answers[i] = 'Concordo Plenamente'; break;
          default: answers[i] = 'Undefined'; break;
        }
      }
      candidate.answers = answers;
    }

    if (candidate.justifications) {
      if (candidate.answers) {
        for (let i = 1; i <= 40; i++) {
          page.push(
            <section key={i} className="candidate-answer">
              <p className='QuestionTitle'>
                <span className='QuestionNumber'>{i}.</span>
                {questions[i - 1].question}
              </p>
              <p className='QuestionAnswer BtnAnswer'>
                {candidate.answers[i]}
              </p>
              <p className='candidate-answer__justification'>
                <b>Justificativa:</b> <br />
                {candidate.justifications[i]}
              </p>
            </section>
          )
        }
      }
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <PageLayout>
        <div className="container candidate-profile">
          <h1 className="uppercase">Perfil do candidato</h1>
          <div className='CandidateData'>
            <div className='photo'>
              <img src={candidate.picture} alt={`Foto do candidato ${candidate.name}`} />
            </div>
            <div className='info'>
              <div>
                <span className='candidate-name'>{candidate.name}</span>
                <span className='candidate-number'>{candidate.number}</span>
              </div>
              <div>
                <span className='partido-name'>{candidate.politicalParty}</span>
              </div>
              <div>
                <span className='candidate-description'>{candidate.description}</span>
              </div>
            </div>
          </div>
          <div className='CandidateAnswers'>
            {page}
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default CandidateAnswers;
