import { useState } from "react";
import "./app.css";

function App() {
  const [questionNumber, setQuestionNumber] = useState(5);

  const moneyPyramid = [
    { id: 1, amount: "R$100" },
    { id: 2, amount: "R$200" },
    { id: 3, amount: "R$300" },
    { id: 4, amount: "R$500" },
    { id: 5, amount: "R$1000" },
    { id: 6, amount: "R$2000" },
    { id: 7, amount: "R$4000" },
    { id: 8, amount: "R$8000" },
    { id: 9, amount: "R$16000" },
    { id: 10, amount: "R$32000" },
    { id: 11, amount: "R$64000" },
    { id: 12, amount: "R$125000" },
    { id: 13, amount: "R$250000" },
    { id: 14, amount: "R$500000" },
    { id: 15, amount: "R$1000000" },
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">questions and answers</div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
