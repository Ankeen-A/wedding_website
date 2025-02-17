// pages/Home.js
import React from 'react';
import './Home.css';
import titleImg from '../assets/title.svg';

const Home = () => {
  return (
    <div className='homeBackground'>
      <div className ="homeTitle"> 
        <img src={titleImg} alt="Ankeen & Quinton" className="titleImg" />

        <div className='info'>
          <p className='announcement'>We are getting married!</p>
          <p className='date'>JUNE 30th 2025</p>
          <p className='location'>Glendale, CA</p>
        </div>


      </div>

    </div>
  );
};

export default Home;
