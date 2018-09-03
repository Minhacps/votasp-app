export const saveVoterAnswer = jest.fn(() => Promise.resolve());

export const getCurrentUser = jest.fn(() =>
  Promise.resolve({
    data: () => ({
      role: 'candidate'
    })
  })
);

export const watchAnswers = jest.fn(() => ({
  onSnapshot: () => Promise.resolve()
}));

export const watchAnswerJustification = jest.fn(() => ({
  onSnapshot: () => Promise.resolve()
}));
