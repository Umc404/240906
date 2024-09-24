import React from 'react';
import './comp.css'
import Counter from './Counter';
import Counter2 from './Counter2';
import Input from './Input';
import Input2 from './Input2';
import Color from './Color';

const Comp2 = () => {

    // count 예제
    // Hook : 기능을 할 수 있게 해주는 역할
    // useState() : 상태변화

    return (
        <div className='Comp2 comp'>
            Comp2 입니다.
            useReducer
            <Counter2 />
            <hr />
            <Counter />
            <hr />
            <Input />
            <hr />
            <Color />
            <hr />
            <Input2 />
        </div>
    );
};

export default Comp2;