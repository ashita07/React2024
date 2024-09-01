import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Step step={step} setstep={setStep} />
      <Counter count={step} setStep={setStep} />
    </div>
  );
}

function Step({ step, setstep }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setstep(Number(e.target.value))}
      />{" "}
      Step{step}
      <div></div>
    </div>
  );
}

function Counter({ count, setStep }) {
  const [counter, setCounter] = useState(0);
  let IncreaseCount = () => setCounter(counter + count);
  let DeacreaseCount = () => setCounter(counter - count);

  function HandleReset() {
    setCounter(1);
    setStep(0);
  }

  const date = new Date("August 11 2024");
  date.setDate(date.getDate() + counter);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>
        <button onClick={DeacreaseCount}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={IncreaseCount}>+</button>
      </span>
      <p>
        <span>
          {count === 0
            ? "today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {counter > 1 || count > 0 ? (
          <button onClick={HandleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
export default App;
