import React, { Component } from 'react';
import classNames from 'classnames';
import firebase from 'firebase/app';

import Deputado from '../components/Deputado/Deputado';
import Loader from '../components/Loader/Loader';
import PageLayout from '../components/PageLayout/PageLayout';
import { CANDIDATE } from '../constants/userRoles';

import { watchAnswers } from '../Questionario/QuestionarioService';

import './Ranking.scss';

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.authListener = null;
  }

  state = {
    candidates: [],
    loading: true,
    view: 'federal',
    pictures: {}
  };

  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged(user => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(snapshot => {
          const userData = snapshot.data();

          if (userData.role === CANDIDATE) {
            this.props.history.push('/');
            return;
          }

          watchAnswers('voter_answers').onSnapshot(this.storeCandidates);
        });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  storeCandidates = snapshot => {
    const userAnswers = snapshot.data();
    const getTopMatches = firebase.functions().httpsCallable('getTopMatches');

    getTopMatches(userAnswers).then(matches => {
      matches.data.forEach(candidate => {
        const { candidateId } = candidate;

        firebase
          .firestore()
          .collection('users')
          .doc(candidateId)
          .get()
          .then(doc => {
            if (doc.exists) {
              const candidateDetails = { ...doc.data() };
              this.getCanditatePicture(candidateDetails.number);

              const actualCandidate = {
                ...candidate,
                ...candidateDetails
              };

              const rankedCandidates = [...this.state.candidates, actualCandidate];

              this.setState({
                candidates: rankedCandidates,
                loading: false
              });
            } else {
              console.log('Documento não existe!');
            }
          })
          .catch(function(error) {
            console.log('Erro ao tentar coletar o documento:', error);
          });
      });
    });
  };

  getCanditatePicture = number => {
    firebase
      .firestore()
      .collection('candidates_pictures')
      .where('number', '==', parseInt(number))
      .limit(1)
      .get()
      .then(querySnapshot => {
        const { pictures } = this.state;
        this.setState({
          pictures: {
            ...pictures,
            [number]: querySnapshot.docs[0].data().picture
          }
        });
      });
  };

  switchView = view => {
    this.setState({
      view
    });
  };

  render() {
    const { candidates, loading, view, pictures } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <PageLayout>
        <div className="container ranking">
          <div className="description">
            <h1 className="uppercase">Ranking</h1>
            <p>Veja os candidatos e candidatas que pensam mais parecido com você.</p>
          </div>

          <div className="candidate__view-switcher">
            <button
              onClick={() => this.switchView('federal')}
              className={classNames({
                'bt-view--selected': view === 'federal'
              })}
            >
              Federal
            </button>
            <button
              onClick={() => this.switchView('estadual')}
              className={classNames({
                'bt-view--selected': view === 'estadual'
              })}
            >
              Estadual
            </button>
          </div>

          <div className="content">
            <div className="deputados">
              {view === 'federal' &&
                candidates
                  .filter(candidate => candidate.level === 'federal')
                  .map(candidate => (
                    <Deputado
                      key={candidate.candidateId}
                      {...candidate}
                      picture={pictures[candidate.number]}
                    />
                  ))}

              {view === 'estadual' &&
                candidates
                  .filter(candidate => candidate.level === 'estadual')
                  .map(candidate => (
                    <Deputado
                      key={candidate.candidateId}
                      {...candidate}
                      picture={pictures[candidate.number]}
                    />
                  ))}
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default Ranking;
