import React, { Component } from 'react';
import firebase from 'firebase/app';
import './CandidateAnswers.scss';
import questions from '../../Questionario/questoes';
const validAnswers = ['CP', 'C', 'I', 'D', 'DP']

class CandidateAnswers extends Component {

    state = {
        candidate: {}
    }

    componentDidMount() {
        console.log('Cheguei no Candidate ANswers');
        const candidateId = this.props.match.params.id;
        console.log(candidateId);
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
                                console.log(candidate);
                                this.setState({ candidate });
                            });
                    });
            });
    }

    componentWillUnmount() {
        this.authListener();
    }

    render() {
        let candidate = this.state.candidate;
        let page = [];
        // console.log(candidate);
        // console.log(questions);
        // console.log(questions[3].question);
        if (candidate.justifications) {
            if (candidate.answers) {
                for (let i = 1; i <= 40; i++) {
                    page.push(
                        <section>
                            <p className='QuestionTitle'>
                                <span className='QuestionNumber'>{i}.</span>
                                {questions[i - 1].question}
                            </p>
                            <p className='QuestionAnswer'>
                                {candidate.answers[i]}
                            </p>
                            <p className='QuestionJustification'>
                                {candidate.justifications[i]}
                            </p>
                            <hr />
                        </section>
                    )
                }
            }
        }

        return (
            <div>
                <h3>Perfil</h3>
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
                    </div>
                </div>
                <div className='CandidateAnswers'>
                    {page}
                </div>
            </div>
        );
    }
}

export default CandidateAnswers;