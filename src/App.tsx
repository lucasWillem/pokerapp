import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameStarter from "./app/play";

import {
  HandEvalutorsContext,
  FourOfAKindEvaluator,
} from "./app/hand-evaluators";

function App() {
  React.useEffect(() => {
    // const hands = GameStarter.getHands({ noOfPlayers: 2 });
    // console.log(hands);

    const isFullHouseEvaluator = new FourOfAKindEvaluator([
      {
        number: 8,
        suit: "clubs",
      },
      {
        number: 8,
        suit: "spades",
      },
      {
        number: 8,
        suit: "clubs",
      },
      {
        number: 8,
        suit: "spades",
      },
      {
        number: 8,
        suit: "hearts",
      },
    ]);

    const isFullHouse = new HandEvalutorsContext(
      isFullHouseEvaluator
    ).evaluate();

    console.log({ isFullHouse });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
