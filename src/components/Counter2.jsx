import React from 'react';
import './comp.css'
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}


const Counter2 = () => {

    const [state, dispatch] = useReducer(reducer, 0);
    
    const increment = () => {
        dispatch( {type: "INCREMENT"} );
    }
    // const decrement = () => {
    //     dispatch( {type: "DECREMENT"} );
    // }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={increment}>+</button>
            {/* <button onClick={decrement}>-</button> */}
            {/* <button onClick={()=>{ dispatch({type: "INCREMENT"}) } }>+</button> */}
            <button onClick={()=>{ dispatch({type: "DECREMENT"}) } }>-</button>
        </div>
    );
};

export default Counter2;