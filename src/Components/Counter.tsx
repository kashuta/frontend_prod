// counter component
import React from 'react';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: <strong>{count}</strong></p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
