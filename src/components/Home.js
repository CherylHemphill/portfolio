import React from 'react';
import video from '../video/'

export default function Home() {
  return (
    <div className="home-container" id='home'>
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1>Cheryl Hemphill</h1>
        <p>Welcome web traveler</p>
      </div>
    </div>
  );
}
