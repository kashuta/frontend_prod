// counter component
import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className={classes.btn}>
            <h1>Counter</h1>
            <p>Current count: <strong>{count}</strong></p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
