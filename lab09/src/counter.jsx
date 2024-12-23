import React, { useState } from "react";

function App(){
    const [count, setCount,]= useState(0);

    const increment =() => {
      setCount(count + 1); // Updating the state
    };

    const decrement =() => {
      setCount(count - 1); // Updating the state
    };

    const reset =() => {
      setCount(0);
    }

   // const random

    return(
      <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
      </div>
    );

}
export default App;