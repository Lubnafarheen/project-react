import React, { useState } from 'react';

const Counter = () => {

    const[counter, setCounter] = useState(0);

const incrementClick = () => {
    console.log("Incrementing!");
    setCounter(counter + 1);
}

const decrementClick = () => {
    console.log("Decrementing!");
    setCounter(counter - 1);
}

const resetClick = () => {
    console.log("Reset!");
    setCounter(0);
}

    return (
        <div className='container'>

            <h3>Counter:{counter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementClick}>Increment</button>
            <button type='button' className='btn btn-info' onClick={decrementClick}>Decrement</button>
            <button type='button' className='btn btn-danger' onClick={resetClick}>Reset</button>
            //or
            <button type='button' className='btn btn-danger' onClick={() => setCounter(0)}>Reset</button>
            
        </div>
    );
};

export default Counter;