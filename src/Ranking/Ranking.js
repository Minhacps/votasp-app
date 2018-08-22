import React, { Component } from 'react';
import firebase from 'firebase';

import Deputado from '../components/Deputado/Deputado';
import Loader from '../components/Loader/Loader';
import PageLayout from '../components/PageLayout/PageLayout';

import {
  watchAnswers,
} from '../Questionario/QuestionarioService';

import './Ranking.scss';

class Ranking extends Component {
  state = {
    candidates: [],
    loading: true,
    candidateViewType: 'federal',
  };

  componentDidMount() {
    watchAnswers('voter_answers').onSnapshot(this.storeCandidates);
  }

  storeCandidates = snapshot => {
    const userAnswers = snapshot.data();
    const getTopMatches = firebase.functions().httpsCallable('getTopMatches');

    getTopMatches(userAnswers).then((matches) => {
      matches.data.forEach(candidate => {
        const { candidateId } = candidate;

        firebase
          .firestore()
          .collection("users")
          .doc(candidateId)
          .get().then((doc) => {
            if (doc.exists) {
              const candidateDetails = { ...doc.data() }
              const actualCandidate = {
                ...candidate,
                ...candidateDetails,
              }

              const rankedCandidates = [
                ...this.state.candidates,
                actualCandidate,
              ];

              this.setState({
                candidates: rankedCandidates,
                loading: false,
              });
            } else {
              console.log("Documento não existe!");
            }
          }).catch(function (error) {
            console.log("Erro ao tentar coletar o documento:", error);
          });
      })
    })
  };

  switchView = (level) => {
    this.setState({
      candidateViewType: level,
    })
  }

  render() {
    const { candidates, loading, candidateViewType } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <PageLayout>
        <div className='container ranking'>
          <div className='description'>
            <h1 className='uppercase'>Ranking</h1>
            <p>Veja os candidatos e candidatas que pensam mais parecido com você.</p>
          </div>
          <div className='content'>
            <div className='deputados'>
              {candidates.map((candidate) => (
                <Deputado key={candidate.candidateId} {...candidate} />
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default Ranking;
