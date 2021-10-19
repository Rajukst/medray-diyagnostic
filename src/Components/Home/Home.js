import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import cover from '../../Images/Header-logo/MdeRay.jpg'
import './Home.css'
import HomeService from './HomeService';
import MyCar from './MyCar';

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
               <MyCar></MyCar> 
            </div>
            <h1 className="mt-5">We Always Provide Best Service For You. CheckOut Our Service !!! </h1>
                <img  className="cover-image" src={cover} alt="" />
            <Row xs={1} md={2} lg={3} className="g-4 m-5">
            {
                service.slice(0,6).map(serviceData=> <HomeService
                key= {serviceData.img}
                getData={serviceData}
                ></HomeService> ) 
            }
           
            </Row>
        </div>
    );
};

export default Home;