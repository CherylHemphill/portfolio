import React from 'react';
import backgroundVideo from '../images/deepSpace.mp4'

export default function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>Cheryl Hemphill</h1>
        <p>Welcome web traveler</p>
      </div>
    </div>
  );
}
