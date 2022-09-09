import "./App.css";
import React from "react";

function App() {
  const [currentPlaying, setCurrentPlaying] = React.useState("X");
  const [count, setCount] = React.useState(0);
  const [winner, setWinner] = React.useState(null);
  const [draw, setDraw] = React.useState(false);

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function fullfill({ target }) {
    if (target.innerText === "" && winner === null) {
      target.innerText = currentPlaying;
      setCount(count + 1);
      if (count % 2 === 0) {
        setCurrentPlaying("O");
      } else {
        setCurrentPlaying("X");
      }
    }
  }

  React.useEffect(() => {
    const X = [];
    const O = [];
    const fields = document.querySelectorAll(".field");
    fields.forEach((field, index) => {
      if (field.innerText === "X") {
        X.push(index);
      } else if (field.innerText === "O") {
        O.push(index);
      }
    });
    win.forEach((item) => {
      if (X.includes(item[0]) && X.includes(item[1]) && X.includes(item[2])) {
        setWinner("X");
      } else if (
        O.includes(item[0]) &&
        O.includes(item[1]) &&
        O.includes(item[2])
      ) {
        setWinner("O");
      } else {
        let checkDraw = 0;
        fields.forEach((item) => {
          if (item.innerText !== "") {
            checkDraw += 1;
          }
        });
        if (checkDraw === 9 && winner === null) {
          setDraw(true);
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlaying]);

  function restart() {
    const fields = document.querySelectorAll(".field");
    fields.forEach((field) => {
      field.innerText = "";
      setWinner(null);
      setCurrentPlaying("X");
      setCount(0);
      setDraw(false);
    });
  }

  return (
    <>
      <h1>Playing "{currentPlaying}"</h1>
      <section className="fieldsContainer">
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
        <div className="field" onClick={fullfill}></div>
      </section>

      <section>
        <button className="restart" onClick={restart}>
          Restart
        </button>
        {winner && (
          <div className="result">
            <h1>{winner} wins!</h1>
          </div>
        )}
        {draw && (
          <div className="result">
            <h1>Draw!</h1>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
