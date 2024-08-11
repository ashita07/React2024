import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Step step={step} setstep={setStep} />
      <Counter count={step} />
    </div>
  );
}

function Step({ step, setstep }) {
  let Inc = () => setstep(step + 1);
  let Dec = () => setstep(step - 1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Step{step}
      <div>
        <button onClick={Dec}>-</button>
        <button onClick={Inc}>+</button>
      </div>
    </div>
  );
}
function Counter({ count }) {
  const [counter, setCounter] = useState(0);
  let IncreaseCount = () => setCounter(counter + count);
  let DeacreaseCount = () => setCounter(counter - count);

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
      Counter {counter}
      <div>
        <button onClick={DeacreaseCount}>-</button>
        <button onClick={IncreaseCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : counter > 0
            ? `${counter} days from today is`
            : `${Math.abs(counter)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default App;
