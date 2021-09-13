import { Joke } from "./components/joke";

import jokes from "./jokes.json"

function getRandomIndex(max) {
  return (Math.floor(Math.random() *max));
}


function App() {
const index1 = getRandomIndex(jokes.length);
const index2 = getRandomIndex(jokes.length);
const index3 = getRandomIndex(jokes.length);

  return (
    <main>
      <h1>Dad Jokes</h1>
      <Joke question={jokes[index1].setup} answer={jokes[index1].punchline} />
      <Joke question={jokes[index2].setup} answer={jokes[index2].punchline} />
      <Joke question={jokes[index3].setup} answer={jokes[index3].punchline} />
    </main>
  );
}

export default App;
