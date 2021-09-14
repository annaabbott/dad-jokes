import Joke from "./components/Joke";

import jokes from "./jokes.json"

import "./App.css"

function App() {

  return (
    <main className="jokeContainer">
      {jokes.map(joke => <Joke key={joke.id} {...joke} />) }
    </main>
  );
}

export default App;
