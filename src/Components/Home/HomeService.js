import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

import './HomeService.css'
const HomeService = ({getData}) => {
    const {name, description, img}= getData
    return (
        <div>
            <div>
            <Col className="mb-5">
        <Card className="my-card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="outline-primary">Get Our Service</Button>
          </Card.Body>
        </Card>
      </Col>
   </div>
        </div>
    );
};

export default HomeService;