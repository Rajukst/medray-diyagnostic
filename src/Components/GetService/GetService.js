import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GetService = () => {

    const {serviceId}= useParams()
   
 

    return (
        <div>
                <h1>This is booking {serviceId} </h1>

        </div>
    );
};

export default GetService;