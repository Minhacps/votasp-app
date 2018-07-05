export const answersMock = [
  {
    questionId: 1,
    answer: "concordo_plenamente"
  },
  {
    questionId: 14,
    answer: "discordo"
  },
  {
    questionId: 20,
    answer: "concordo"
  },
  {
    questionId: 36,
    answer: "discordo_plenamente"
  },
];

export const questionsMock = Array.from(
  new Array(40),(val,index) => (
    { id: index + 1 }
  )
);
