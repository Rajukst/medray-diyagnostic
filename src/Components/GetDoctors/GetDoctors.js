import React from 'react';
import { useParams } from 'react-router';
import myDoctors from "../../Data/doctorsData.json"
const GetDoctors = () => {
    const {serviceId}= useParams()
    const getServiceID= myDoctors.find(getData=> getData.id===parseInt(serviceId))
    const {img, name, description}= getServiceID;
    return (
        <div>
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
        </div>
    );
};

export default GetDoctors;