import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DynamicDoctor from './DynamicDoctor';

const Doctor = () => {
    const [data, getData]= useState([])
    useEffect(()=>{
        fetch('./doctorsData.json')
        .then(res=>res.json())
        .then(data=>getData(data))
    },[])
    return (
        <div>
              <Row xs={1} md={2} lg={3} className="g-4 m-5">
            {
                data.map(singleData=> <DynamicDoctor
                key={singleData.id}
                myUse={singleData}
                >
                    
                </DynamicDoctor>)
            }
           
            </Row>
        </div>
    );
};

export default Doctor;