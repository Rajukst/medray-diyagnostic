import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import myService from "../../Data/serviceData.json"
const GetService = () => {

    const {serviceId}= useParams()
   console.log(serviceId)
    const getServiceID= myService.find(getData=> getData.id===parseInt(serviceId))
    const {img, name, description}= getServiceID;

    return (
        <div className="mb-5 pb-5">
              <div className="w-100">
                <div className="p-5">
                    <div className="p-1">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="p-4-w-75">
                        <h3>{name}</h3>
                        <h4>{description}</h4>
                    </div>
                </div>
              </div>
       

        </div>
    );
};

export default GetService;