import React from 'react';
import backgroundImage from '../../images/emay-nightSky.jpg';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
  };
  return (
    <div className="home-container" id='home' style={containerStyle}>
     
      <div className="text-overlay">
        <h1>Cheryl Hemphill</h1>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  );
  
}
