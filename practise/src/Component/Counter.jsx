import react, { useState } from 'react';


function Counter() {
    const [count,setCount] = useState(0);

    const inc = () => {
        setCount(count+1);
    }
    const dec = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
      
        <div>
            <h1>Counter App</h1>
            <h2>Count : {count}</h2>
            <button onClick = {inc}>+</button>
            <button onClick = {dec}>-</button>
            <button onClick = {reset}>Reset</button>

        </div>
       
    );
};
export default Counter;
