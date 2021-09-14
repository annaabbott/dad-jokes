import "./Punchline.css";

function Punchline(props) {
  return (
    <div className="punchline">
      <div className="heading">Answer: </div>
      <div>{props.punchline}</div>
    </div>
  );
}

export default Punchline;
