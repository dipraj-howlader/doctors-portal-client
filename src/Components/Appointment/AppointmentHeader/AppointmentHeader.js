import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import chairImg from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    

    return (
        <main style={{height:'600px',display:'flex',alignItems:'center'}}>
         <Row>
    <Col md={{span:4, offset:1}}>
        <div>
            <h1 style={{color:'#3A4256'}}>Appointment</h1>
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
           
        </div>
    </Col>
    <Col md={6}><Image src={chairImg} fluid/> </Col>
  </Row>   
        </main>
    );
};

export default AppointmentHeader;