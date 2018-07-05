import axios from 'axios';

export const getQuestions = () => axios.get('https://questions.api.votasp.org.br/');

