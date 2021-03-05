import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="col-md-8 text-center">
      <div className="card mt-5">
        <div className="card-body">
          {count}
          <br />
          <div class="btn-group btn-group-sm" role="group" aria-label="...">
            <button className="btn btn-success btn-xs" onClick={handleIncrement}>
             Increment
            </button>
            <button className="btn btn-warning btn-xs" onClick={handleDecrement}>
              Decrement
            </button>
            <button className="btn btn-danger btn-xs" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
