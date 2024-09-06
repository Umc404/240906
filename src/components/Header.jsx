import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div>Header 영역입니다.</div>
            <Link to='/Home'>home</Link>
            <Link to='/Comp1'>Comp1</Link>
            <Link to='/Comp2'>Comp2</Link>
            <Link to='/Comp3'>Comp3</Link>
            <div>여기까지 Header임.</div>
        </div>
    );
};

export default Header;