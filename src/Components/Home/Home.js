import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import cover from '../../Images/Header-logo/MdeRay.jpg'
import './Home.css'
import HomeService from './HomeService';

const Home = () => {
    const [service, setService]= useState([])
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <div>
                <img  className="cover-image" src={cover} alt="" />
            </div>

            <Row xs={1} md={2} lg={3} className="g-4 m-5">
            {
                service.map(serviceData=> <HomeService
                key= {serviceData.id}
                getData={serviceData}
                ></HomeService> )
            }
            </Row>
        </div>
    );
};

export default Home;