// pages/Schedule.js
import React from 'react';
import './Schedule.css';
import flower2 from '../assets/flower2.svg';
import flower1 from '../assets/flower1.svg';

const Schedule = () => {
  return (
    <div className='scheduleBackground'>
      <div className='scheduleBgImg'></div>
      {/* <img src={flower1} alt="flower" className="flower1"></img>
      <img src={flower2} alt="flower" className="flower2"></img> */}

      <div className='scheduleBody'>
        <h1 className='title'>Schedule</h1>
        {/* <div className='Henna'>
          <h2>Henna</h2>
        </div> */}  

        <h2>Wedding Day Schedule</h2>
        <div className='weddingBody'>
          <h3>Getting Ready</h3>
          <h3>Wedding Photos</h3>
            <li>Location:</li>
            <li>Address:</li>
            <li>Wedding party arrival time:</li>
            <li>Guests arrival time:</li>
            <li>End time:</li>
          <h3>Ceremony</h3>
          <h3>Reception</h3>
        </div>
      </div>
    </div>
  );
};

export default Schedule;


