import React from 'react';
import './Candidate.css';

const candidate = (props) => {
  console.log(props.photoUrl);
  return (

    <React.Fragment>
      <section className="Candidate">
        <section className="Photo">
          <img src={props.photoUrl} alt={props.alt} />
        </section>
        <section className="CandidateData">
          <span className="Name bold">{props.name}</span>
          <span className="Number">{props.number}</span>
          <p className="PoliticalParty">{props.politicalParty}</p>
          <p><span>Afinidade:</span>
          <span className="Ranking">{props.ranking}%</span></p>
        </section>
        <hr />
      </section>
    </React.Fragment>
  );

}

export default candidate;
