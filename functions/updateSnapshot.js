const validAnswers = ['CP', 'C', 'I', 'D', 'DP']

const hasValidAnwers = (answersDoc) => {
  for (let i = 1; i <= 40; i++) {
    const answer = answersDoc.data()[i];
    if (undefined === answer || !validAnswers.includes(answer)) {
      return false;
    }
  }

  return true;
}

const hasValidInfo = (infoDoc) => {
  const info = infoDoc.data();
  
  return undefined !== info.name
    && undefined !== info.number
    && undefined !== info.politicalParty;
}

const updateSnapshot = (admin) => {
  return (req, res) => {
    const usersCollection = admin.firestore().collection('users');
    
    return admin.firestore().collection('candidate_answers').where('40', '>', '').get()
    .then((querySnapshot) => {
      const candidatesData = querySnapshot.docs.reduce((data, candidateAnswers) => {
        if (hasValidAnwers(candidateAnswers)) {
          const candidateId = candidateAnswers.id;
          const candidateInfo = usersCollection.doc(candidateId).get();
          if (candidateInfo.exists && hasValidInfo(candidateInfo)) {
            data.push(Object.assign(
              {
                id: candidateId,
                answers: candidateAnswers.data()
              },
              candidateInfo.data()
            ));
          }
        }

      return data;
      }, []);

      return candidatesData;
    }).then((data) => {
    return admin.storage().bucket().file('candidatesAndAnswers.txt')
      .save(data, () => {return res.status(200).send(data);})
    });
  }
}

module.exports = updateSnapshot;