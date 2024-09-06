import React from 'react';
import {friends} from '../data/data';
import Table from 'react-bootstrap/Table';
import './comp.css'

const Comp1 = () => {
    return (
        <div className='Comp1 comp' style={{width:'500px', margin: '0 auto'}}>
            <Table striped bordered hover size="sm" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>phone</th>
                        <th>addr</th>
                        <th>job</th>
                    </tr>
                </thead>
                <tbody>
                {
                    friends.map(s => (
                        <tr>
                            <td>{s.name}</td>
                            <td>{s.phone}</td>
                            <td>{s.addr}</td>
                            <td>{s.job}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            </div>
    );
};

export default Comp1;