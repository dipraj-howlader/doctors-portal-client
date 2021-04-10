import React from 'react';
import { Col, Row } from 'react-bootstrap';
import chairImg from '../../../images/chair.png';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
const HeaderMain = () => {
    return (
        <main>
         <Row>
    <Col md={{span:4, offset:1}}>
        <div>
            <h1>Your New Smile Starts Here</h1>
            <br/>
            <p style={{color:'lightgray'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto deserunt nisi a explicabo, quos optio.</p>
            <br/>
            <Button variant="primary">GET APPOINTMENT</Button>
        </div>
    </Col>
    <Col md={6}><Image src={chairImg} fluid/> </Col>
  </Row>   
        </main>
    );
};

export default HeaderMain;