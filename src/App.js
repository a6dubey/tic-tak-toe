import "./App.css";
// Importing the required components
import Board5 from "./Board5";
import Board4 from "./Board4";
import Info from "./Info";

// Importing the useState hook
import { useState } from "react";
import Board from "./Board";

function App() {
  // Creating a reset state, which indicates whether
  // the game should be reset or not
  const [reset, setReset] = useState(false);

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState("");

  const [size, setSize] = useState("3");

  // Sets the reset property to true
  // which starts the chain
  // reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };

  //Selecting the Board size on depending on user's choice
  const board = () => {
    switch (size) {
      case "4":
        return (
          <Board4
            reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
          />
        );
      case "5":
        return (
          <Board5
            reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
          />
        );

      default:
        return (
          <Board
            reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
          />
        );
    }
  };

  return (
    <div className="App">
      {/* Shrinks the popup when there is no winner */}
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        {/* Display the current winner */}
        <div className="winner-text">{winner}</div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <Info />
      {/* Custom made board component comprising of 
            the tic-tac-toe board  */}

      {
            board()
      }
      
      <div className="size">
        <div className="player" onClick={() => setSize("3")}>
          3X3
        </div>
        <div className="player" onClick={() => setSize("4")}>
          4X4
        </div>
        <div className="player" onClick={() => setSize("5")}>
          5X5
        </div>
      </div>
    </div>
  );
}

export default App;
