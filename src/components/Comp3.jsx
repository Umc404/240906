import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './comp.css'

const Comp3 = () => {

    // 다른 컴포넌트로 데이터를 넘길때 props 도 있지만,
    // path를 사용하여 데이터를 넘길 수 있음.
    // (1) path variable : /comp3/12 ex)네이버 블로그
    // (2) queryString : /comp3?id=12&name=12 ex)google 검색

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    return (
        <div className='Comp3 comp'>

            {/* id/pw 입력받고 전송버튼 클릭하여 Param3.jsx에 출력 */}
            <input type="text" name='id' placeholder='id' onChange={(e)=>{setId(e.target.value)}}/> <br />
            <input type="text" name='pw' placeholder='pw' onChange={(e)=>{setPw(e.target.value)}}/> <br />
            <Link to={{pathname:`/param3/${id}/${pw}`}}>id/pw 전송</Link>
            {/* to='/param3?num=3&page=16' */}
            <br /><br /><br /><hr />


            {/* param1 */}
            <div>Comp3 입니다.</div>
            <Link to='/param/15/kim'>path variable</Link>

            <br /><br /><br /><hr />
            <Link to={{pathname:'/param/15/kim'}}>queryString</Link>

            {/* param2 */}
            <br /><br /><br /><hr />
            <Link to='/param?num=1&page=15'>queryString</Link>
        
            <br /><br /><br /><hr />
            <Link to={
                {
                    pathname:'/param',
                    search:'?num=1&page=15'
                }
            }> queryString params</Link><br />
            
        </div>
    );
};

export default Comp3;