import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className='exploreBackground'>
      <div className='exploreBody'>
        <h1 className='title'>Explore Los Angeles</h1>
        <p>We combined a list of our personal favorite things to do and food that we have enjoyed.</p>
        
        <h2>Places to Stay</h2>
        <div>         
          <h3>Brand Plaza Hotel</h3> 
          <h3>Residence Inn Los Angeles Glendale</h3>
          <h3>Hyatt Place Glendale / Los Angeles</h3>
          <h3>The Glenmark, Glendale, a Tribute Portfolio Hotel</h3>
          <h3>Hilton Los Angeles North/Glendale & Executive Meeting Ctr</h3>
        </div>

        <h2>Fun Outdoor Activities</h2>
        <div> 
          <h3>Venice Beach</h3>  
            <li>Great place to go and walk around, normally there are lots of little food places, and booths selling trinckets</li>
          <h3>LA Zoo</h3>     
          <h3>Universal Studios Hollywood</h3>  
          <h3>Disneyland California</h3>  
          <h3>The Huntington Library, Art Museum and Botanical Gardens</h3>
          <h3>Griffith Observatory</h3>    
          <h3>Descanso Gardens</h3>
          <h3>Echo Park Swan Boats</h3>
          <h3>The Getty Art Museum</h3>
          <h3>Santa Monica Pier</h3>
        </div>

        <h2>Great food spots</h2>
        <div> 
          <h3>Gen Korean BBQ</h3> 
          <h3>Din Tai Fung</h3>
          <h3>Raffi's Place</h3>  
          <h3>Cafe Santorini</h3>    
          <h3>Hummus Republic</h3>
        </div>

        <h2>Indoor spaces to explore</h2>
        <div>         
          <h3>Burbank Mall</h3> 
          <h3>Glendale Galleria and the Americana</h3>
        </div>

      </div>
    </div>
  );
};

export default Explore;


