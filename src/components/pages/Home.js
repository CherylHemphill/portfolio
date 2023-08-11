import React from 'react';
import video from '../../video/Blue_Spiral_galaxy.mp4'

export default function Home() {
 
  return (
    <div className="home-container" id='home' >
     
      <div >
      <video src={video} autoPlay muted loop width='100vw' className="background-video">
        
        Your browser does not support the video tag.
      </video>
        <h1 className="text-overlay">Cheryl Hemphill</h1>
        <h2 className="text-overlay">Full Stack Web Developer</h2>
        <div className='about'>
      I am a full stack developer with a strong inclination towards backend technologies. My journey into the world of coding began when I enrolled in the University of Austin's comprehensive full stack bootcamp. Guided by experienced instructors and immersive hands-on projects, I honed my skills in both front-end and back-end development. While I'm comfortable working on all aspects of web development, my heart lies in crafting robust and efficient server-side solutions. I thrive on tackling complex challenges and architecting the backbone of applications that power seamless user experiences. With a solid foundation in modern web technologies and a curious mind that's always eager to learn, I'm dedicated to creating innovative and scalable solutions that make a meaningful impact.
      </div>
      </div>
    </div>
  );
  
}
