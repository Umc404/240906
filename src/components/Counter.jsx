import React, { useState } from 'react';
import './comp.css'

const Counter = () => {

    // useStates() : 상태변화
    const [ count, setCount ] = useState(0);
    
    const incre = ()=> {
        setCount(count+1);
    }

    const decre = ()=> {
        setCount(count-1);
    }

    return (
        <div className='count'>
            <h1>{count}</h1>
            <button onClick={incre}>+</button>
            <button onClick={decre}>-</button>
        </div>
    );
};

export default Counter;