// pages/FAQ.js
import React from 'react';
import './FAQ.css';
import flower2 from '../assets/flower2.svg';
import flower1 from '../assets/flower1.svg';


const FAQ = () => {
  return (
    <div className='faqBackground'>
      {/* <img src={flower1} alt="flower" className="flower1"></img>
      <img src={flower2} alt="flower" className="flower2"></img> */}

      <div className='faqBody'>
      <h1 className='title'>Faq & Information</h1>
        <div className='questions'>
          <h2 className='q1'>1. What is the dress code?</h2>
            <p className='ans'>
            The dress code is black tie with a magical Disney-inspired twist! Gentlemen are encouraged to 
            wear suits or tuxedos, while ladies are invited to wear floor-length dresses, with A-line and ballgown 
            styles preferred for an elegant, fairytale-inspired look. This may be a great time to channel your inner bridgerton! 
            </p>
          <h2 className='q2'>2. Where should I stay?</h2>
            <p className='ans'>
              We have co-ordinated with the -- hotel to get our guests a special discount, however you 
              are more than welcome to stay at any of the hotels near by. Some other good options that are
              within close distance are -- and --.
            </p>
          <h2 className='q3'>3. Are kids invited?</h2>
            <p className='ans'>
              While we adore your little ones, we’ve decided to keep the celebration for guests aged 10 and up. 
              We hope this makes your evening as relaxing and enjoyable as possible—thank you for understanding!
            </p>
          <h2 className='q4'>4. Can I bring a plus one?</h2>
            <p className='ans'>
              To keep our celebration intimate and meaningful, we’ve carefully planned the guest list. 
              We’re so excited to celebrate with you, and your invitation is just for you. We appreciate your understanding!
            </p>
          <h2 className='q5'>5. Do you have a gift registry?</h2>
            <p className='ans'>
              Your presence at our wedding is the greatest gift we could ask for! If you would like to honor us with a gift, 
              we kindly prefer contributions in cash or gold to help us start this exciting new chapter together. Thank you for your generosity!
            </p>
          <h2 className='q6'>6.  Where should I park on the day of the wedding?</h2>
            <p className='ans'>
              There are parking lots where you can self-park your car at the Brand park (where we will be taking pictures) and at the church (the ceremony location). 
              At the wedding reception venue - Stars on Brand there will be vallet parking priced at $16 per car.
            </p>
          <h2 className='q7'>7. What will the weather be like?</h2>
            <p className='ans'>
              In Glendale, California, summer days are warm and sunny. 
              Temperatures typically range from 24–33°C (75–91°F), so plan to stay cool and comfortable. 
              Both the church and the venue will be air-conditioned.
            </p>
          <h2 className='q8'>8. When should I arrive?</h2>
            <p className='ans'>
              A detailed schedule and breakdown of the day is provided under the "schedule" tab. Please refer to the times listed and
              plan on being at least 10 minutes early to make sure you don't miss anything!
            </p>
          <h2 className='q9'>9. What should I do if I’m traveling from out of town?</h2>
            <p className='ans'>
              Knowing most of our guests are coming out of state, and even from out of country we sat and put together a list of our favourite
              activities, iconic loactions to visit, and best food places. This list may be a bit biased so take it with a grain of salt but 
              we included every place we thought would be enjoyable!
            </p>
          <h2 className='q10'>10. Is there a hashtag?</h2>
            <p className='ans'>
              We would love to see any and every picture or video you capture on our special day so please use #ankeenandquinton2025 on your social media posts
              to share the memories with everyone to view.
            </p>
          <h2 className='q11'>11. Who to reach out to with questions / special requests?</h2>
            <p className='ans'>
              You can reach out to either of us on our phone numbers or our main wedding email qna.weddingplans@gmail.com. 
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ;
