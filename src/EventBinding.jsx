import { useState } from "react";

const EventBinding = () => {
  const [count, setCount] = useState(0);

  const handleCount = (action) => {
    if (action === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <p>  {count}</p>
      <button onClick={() => handleCount("plus")}>Increment</button>
      <button 
      style={{
        background: "red"
      }}
      onClick={() => handleCount("minus")} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};

export default EventBinding;
