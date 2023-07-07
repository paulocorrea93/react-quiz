import './app.css'

function App() {
  return (
    <div className="app">
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="moneyList">
          <li className="moneyListItem active">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">R$400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">3</span>
            <span className="moneyListItemAmount">R$300</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">2</span>
            <span className="moneyListItemAmount">R$200</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">R$100</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
