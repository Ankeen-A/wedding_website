// pages/FAQ.js
import React from 'react';
import './Registry.css';

const FAQ = () => {
  return (
    <div className='registryBackground'>
      {/* <img src={flower1} alt="flower" className="flower1"></img>
      <img src={flower2} alt="flower" className="flower2"></img> */}

      <div className='faqBody'>
      <h1 className='title'>Registry Information</h1><br></br><br></br>
        <div className='questions'> 
          <p className='ans'>
            Your presence at our wedding is the greatest gift we could ask for! If you would like to honor us with a gift, 
            we kindly prefer contributions in cash or gold to help us start this exciting new chapter together. 
            For your convenience, we've also included some online options below. Thank you for your generosity!
            <br></br>
            <br></br>
            PayPal:  +1 747 228 6104 
            <br></br>
            Zelle:  +1 747 228 6104
          </p>          
        </div>
      </div>
    </div>
  );
};

export default FAQ;
