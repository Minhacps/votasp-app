export const getQuestions = jest.fn(() => Promise.resolve({
  data: {
    perguntas: [
      {
        id: 1,
        question: 'Legalização do aborto para todos os casos.'
      },
      {
        id: 2,
        question: 'Adoção de crianças por casais do mesmo sexo.'
      },
    ],
  },
}));
