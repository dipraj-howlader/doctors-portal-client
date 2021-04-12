import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../SideBar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    const containerStyle = {
        backgroundColor:"#F4FDFB",
        height:'100%'
    }
    
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                   <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;