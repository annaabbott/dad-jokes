import "./Joke.css";
import Punchline from "./Punchline";

function Joke({setup, punchline}) {
  return (
    <article >
      <div className="card">
        <div className="heading">Question:</div>
        <div className="question">{setup}</div>
      </div>
      <Punchline punchline={punchline} />
    </article>
  );
}

export default Joke;
