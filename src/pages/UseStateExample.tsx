import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  /*const handleIncrement = () => {
    setCounter(counter + 1);
  };
  */
  const handleIncrement = () => {
    setCounter((preState) => preState + 1);
    setCounter((preState) => preState + 2);
    setCounter((preState) => preState + 3);
  };
  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((preState) => preState + 1);
    }, 2000);
  };
  return (
    <div>
      <h2 className="font-bold text-6xl text-orange-700">Count: {counter}</h2>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={() => setCounter((preState) => preState + 1)}>
        Increment
      </button> */}
      <button onClick={handleIncrement}>Increment by 6</button>
      <button onClick={handleAsyncIncrement}>Handle Async Increment</button>

      {/* <button onClick={() => setCounter(counter - 1)}>Decrement</button> */}
      <button onClick={() => setCounter((preState) => preState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default UseStateExample;
