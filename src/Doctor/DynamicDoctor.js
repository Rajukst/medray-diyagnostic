import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DynamicDoctor = ({myUse}) => {
    const {name, id, description, img}= myUse;
    return (
        <div>
               <Col className="mb-5">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Doctors Designation: {name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Link to={`/GetDoctors/${id}`}><Button>Appoint Doctor</Button></Link>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default DynamicDoctor;