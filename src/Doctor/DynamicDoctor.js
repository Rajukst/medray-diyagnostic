import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const DynamicDoctor = ({myUse}) => {
    const {name, description, img}= myUse;
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
            <Button>Appoint Doctor</Button>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default DynamicDoctor;