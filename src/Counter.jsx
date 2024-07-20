import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    if (count === 0) {
      alert("Cannot set count less than 1");
    } else {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (event) => {
    setStep(Number(event.target.value));
  };

  return (
    <div className='pContainer'>
      <div className='container'>
        <h1>Counter</h1>
        <h4>{count}</h4>
        <input
          placeholder='Enter the steps you need for count ...'
          type='number'
          className='stepInput'
          value={step}
          onChange={handleStepChange}
        />
        <div className='buttonIncCecDiv'>
          <button className='increment' onClick={handleIncrement}>
            +
          </button>
          <button className='decrement' onClick={handleDecrement}>
            -
          </button>
        </div>
        <button className='resetButton' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
