import React, { useState } from 'react';
import './Schedule.css';
import flower2 from '../assets/flower2.svg';
import flower1 from '../assets/flower1.svg';

const Schedule = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = "bibidiboo"; // Set your desired password here

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setShowDetails(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className='scheduleBackground'>
      <div className='scheduleBgImg'></div>
      {/* <img src={flower1} alt="flower" className="flower1"></img>
      <img src={flower2} alt="flower" className="flower2"></img> */}

      <div className='scheduleBody'>
        <h1 className='title'>Schedule</h1>

        {/* Wedding Party Details - Password Protected */}
        <div className='weddingPartySection'>
          {!showDetails ? (
            <div className='passwordBox'>
              <h3>Wedding Party Details <em>(Private)</em></h3>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <div className='weddingBody'>
              <h3>Getting Ready</h3>
              <li>Location: Hotel</li>
              <li>Address: to be updated</li>
              <li>Wedding party arrival time: 6:30am</li>
              <li>Getting ready pictures: 10:00am</li>

              <h3>Wedding Photos</h3>
              <li>Location: Brand Park</li>
              <li>Address: 1601 W Mountain St, Glendale, CA 91201</li>
              <li>Wedding party arrival time: 12:30pm</li>
              <li>End time: 2:00pm</li>
            </div>
          )}
        </div>

        {/* Publicly Visible Sections */}
        <div className='weddingBody'>
          <h3>Ceremony</h3>
          <li>Location: St. Mary's Armenian Apostolic Church</li>
          <li>Address: 500 S Central Ave, Glendale, CA 91204</li>
          <li>Guests arrival time: 2:45pm</li>
          <li>Ceremony start time: 3:00pm</li>
          <li>Ceremony end time: 4:00pm</li>
          <li>Pictures at church: 4:00pm</li>
          <li>Pictures conclude: 4:30 pm</li>

          <h3>Reception</h3>
          <li>Location: Stars on Brand Banquet Hall</li>
          <li>Address: 417 N Brand Blvd, Glendale, CA 91203</li>
          <li>Guests arrival time: 4:45pm</li>
          <li>Venue doors open to guests: 5:00pm</li>
          <li>Wedding party grand entrance: 5:30pm</li>
        </div>


      </div>
    </div>
  );
};

export default Schedule;
