/* eslint-disable react/prop-types */
import Score from "./Score";

export default function Learner(props) {
    console.log('PROPS ',props);
    
  return (
    <div>
      <h1>{props.learner.name}</h1>
      <p>{props.learner.bio}</p>

      {props.learner.scores.map((score, index) => {
        return <Score score={score} key={index}/>
      })}

    </div>
  );
}
