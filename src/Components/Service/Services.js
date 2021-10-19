import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DynamicService from './DynamicService';



const Services = () => {
    const [myService, setMyService]= useState([])
    useState(()=>{
      fetch('./serviceData.json')
      .then(res=>res.json())
      .then(data=>setMyService(data))
    },[])

    return (
        <div>
         <Row xs={1} md={2} lg={3} className="g-4 m-5">
            {
                myService.map(getData=> <DynamicService
                key= {getData.id}
                myData={getData}
                ></DynamicService> )
            }
           
            </Row>
        </div>
    );
};

export default Services;