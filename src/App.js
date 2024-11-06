const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export default function App() {
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>
        Balance:<span>X</span>
      </p>
      <p>
        Loan:<span>X</span>
      </p>

      <p>
        <button onClick={() => {}} disabled={false}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Deposit <span>150</span>
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Withdraw <span>50</span>
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Request a loan of <span>5000</span>
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
}
