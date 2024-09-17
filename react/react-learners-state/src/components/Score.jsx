/* eslint-disable react/prop-types */
export default function Score(props) {
  return (
    <div>
      <div>Score: {props.score.score} | Date: {props.score.date}</div>
    </div>
  );
}
