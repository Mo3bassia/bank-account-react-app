import { useReducer } from "react";
import Mo3bassia from "./Mo3bassia";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return { ...state, loan: 5000, balance: state.balance + 5000 };
    case "openAccount":
      return { ...state, isActive: true, balance: 500 };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - 5000 };
    case "closeAccount":
      return { ...initialState };
    default:
      return { ...initialState };
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <div className="App">
        <h1>useReducer Bank Account</h1>
        <p>
          Balance:<span>{balance}</span>
        </p>
        <p>
          Loan:<span>{loan}</span>
        </p>

        <p>
          <button
            onClick={() => {
              dispatch({ type: "openAccount" });
            }}
            disabled={isActive}
          >
            Open account
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "deposit" });
            }}
            disabled={!isActive}
          >
            Deposit <span>150</span>
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "withdraw" });
            }}
            disabled={!isActive}
          >
            Withdraw <span>50</span>
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "requestLoan" });
            }}
            disabled={(!isActive && loan === 0) || (isActive && loan !== 0)}
          >
            Request a loan of <span>5000</span>
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "payLoan" });
            }}
            disabled={(!isActive && loan === 0) || (isActive && loan === 0)}
          >
            Pay loan
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "closeAccount" });
            }}
            disabled={!isActive}
          >
            Close account
          </button>
        </p>
      </div>
      <Mo3bassia />
    </>
  );
}
