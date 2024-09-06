import React, {useState} from 'react';

const Color = () => {

    const [color, setColor] = useState("");
    const [color2, setColor2] = useState("");

    return (
        <div className='color'>
            <h3 style={{color : color2}}>Color Change Example</h3>
            <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
            <button onClick={()=>{setColor2(color)}}>set</button>
        </div>
    );
};

export default Color;