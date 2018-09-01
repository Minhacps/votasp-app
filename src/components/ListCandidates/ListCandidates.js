import React, { Component } from 'react';
import './ListCandidates.scss';
import firebase from 'firebase/app';
import PageLayout from '../PageLayout/PageLayout';
import Candidate from './Candidate/Candidate';

import Loader from '../Loader/Loader';
import { CANDIDATE } from '../../constants/userRoles';

class ListCandidates extends Component {
  constructor(props) {
    super(props);
    this.authListener = null;
  }

  state = {
    candidates: [],
    loading: true
  };

  componentDidMount() {
    let candidates = [];

    firebase
      .firestore()
      .collection('users')
      .where("role", "==", CANDIDATE)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let candidate = { ...doc.data() };
          candidate.id = doc.id;
          firebase
            .firestore()
            .collection('candidate_answers')
            .doc(candidate.id)
            .onSnapshot(snapshot => {
              let answers = snapshot.data();
              // console.log(answers);
              if (answers) {
                let answersCount = Object.keys(answers).length;
                if (answersCount === 40) {
                  candidate.status = "Cadastro Finalizado";
                } else {
                  candidate.status = "Cadastro Incompleto";
                }
              } else {
                candidate.status = "Cadastro Incompleto";
              }
              candidates = [...this.state.candidates, candidate];
              this.setState({
                candidates: candidates
              });
            })
        });
        this.setState({ loading: false });
      })
      .catch(function (error) {
        console.log("Erro ao buscar lista de candidatos: ", error);
      });
    this.setState({ candidates: candidates });
    // this.verificaRespostas();
  }

  compare = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  render() {
    const { candidates, loading } = this.state;
    candidates.sort(this.compare);
    if (loading) {
      return <Loader />;
    } else {
      // console.log(candidates);
    }

    return (
      <PageLayout>
        <section className='list-candidates'>
          <h3 className='titulo'>Lista de Candidatos e Candidatas</h3>
          <h4>Veja abaixo a lista de candidatos e candidatas que já fizeram o cadastro ou estão com cadastro incompleto no Vota SP.</h4>
          <h4>Caso você procure o candidato ou candidata e não encontre é porque ele ou ela ainda não fez o cadastro.</h4>
          <h4>Agradecemos muito se puder avisá-lo ou avaisá-la para se cadastrar.</h4>
          <h4>Somente aparecem no ranking os cadastros completos</h4>
          {candidates.map(candidate => (
            <Candidate
              key={candidate.id}
              {...candidate}
              teste={candidate.status}
            />
          ))}
        </section>

      </PageLayout>
    )
  }
}

export default ListCandidates;
