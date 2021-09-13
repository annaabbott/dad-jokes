import "./joke.css";
import Question from "./question";

export function Joke(props) {
  return (
    <article>
      <div className="question">{props.question}</div>
      <Question punchline = {props.answer}/>

    </article>
  );
}
