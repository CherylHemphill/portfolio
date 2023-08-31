import React from 'react';
import backgroundImage from '../../images/a-scenic.jpg'
import { FaCode, FaLaptop } from 'react-icons/fa';
import projectsData from './ProjectData';

export default function Projects() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

 return ( 
<div id="projects" style={backgroundStyle} className="projects">
<h1 className="projects-title">Projects</h1>
{projectsData.map((project, index) => (
      <div key={index} className="card mb-4 custom-card-body custom-transparent-card" style={{ maxWidth: '540px' }}>
        <div key={index} className="card mb-4 custom-card-body custom-transparent-card" style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-8">
      <div className="video-container">
        <video src={project.videoSrc} autoPlay muted loop className="video">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <p>
          <a href={project.githubLink} className="card-link">
            <FaCode className="icon" />
          </a>
          <a href={project.demoLink} className="card-link">
            <FaLaptop className="icon" />
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

       </div>
    ))}   
</div>
  );
}


  //   <div id="projects" style={backgroundStyle} className="projects">
  //     <h1 className="projects-title">Projects</h1>

  //       {/* BookSpeak */}
  //     <div className="card mb-4 custom-card-body custom-transparent-card" style={{ maxWidth: '540px' }}>
  //       <div className="row g-0">
  //         <div className="col-md-8">
  //         <div className="video-container">
  //         <video src={BookSpeak} autoPlay muted loop  className="video">
        
  //       Your browser does not support the video tag.
  //     </video>
  //     </div>
  //         </div>
  //         <div className="col-md-4">
  //           <div className="card-body ">
  //             <h5 className="card-title">Book Speak</h5>
  //             <p className="card-text">Dive into a realm where literature comes alive as you connect with fellow bookworms in real-time discussions. </p>
  //             <p>
  //               <a href="https://github.com/CherylHemphill/Book_Speak" className="card-link">
  //               <FaCode className="icon" />
  //               </a>
  //               <a href="https://bookspeakreview-69dfe59a4804.herokuapp.com/" className="card-link">
  //               <FaLaptop className="icon" />
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //               {/* Text Editor */}
  //     <div className="card mb-4 custom-transparent-card" style={{ maxWidth: '540px' }}>
  //       <div className="row g-0">
  //         <div className="col-md-8">
  //         <div className="video-container">
  //           <video src={JAT} autoPlay muted loop  className="video">
        
  //       Your browser does not support the video tag.
  //     </video>
  //     </div>
  //         </div>
  //         <div className="col-md-4">
  //           <div className="card-body">
  //             <h5 className="card-title">Just Another Text Editor</h5>
  //             <p className="card-text">Text editor empowers you to craft expressive notes and code snippets seamlessly, regardless of your internet connection.</p>
  //             <p>
  //               <a href="https://github.com/CherylHemphill/Text-Editor" className="card-link">
  //               <FaCode className="icon" />
  //               </a>
  //               <a href="https://snippet-editor-c34410eeb2c1.herokuapp.com/" className="card-link">
  //               <FaLaptop className="icon" />
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Project Tracker */}
  //     <div className="card mb-4 custom-transparent-card" style={{ maxWidth: '540px' }}>
  //       <div className="row g-0">
  //         <div className="col-md-8">
  //         <div className="video-container">
  //         <video src={projectTracker} autoPlay muted loop  className="video">
        
  //       Your browser does not support the video tag.
  //     </video>
  //     </div>
  //         </div>
  //         <div className="col-md-4">
  //           <div className="card-body">
  //             <h5 className="card-title">Project Tracker</h5>
  //             <p className="card-text">Keep up with your current projects  to keep you on track! </p>
  //             <p>
  //               <a href="https://github.com/CherylHemphill/project-tracker" className="card-link">
  //               <FaCode className="icon" />
  //               </a>
  //               <a href="https://cherylhemphill.github.io/project-tracker/" className="card-link">
  //               <FaLaptop className="icon" />
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Weather Forecast */}
  //     <div className="card mb-4 custom-transparent-card" style={{ maxWidth: '540px' }}>
  //       <div className="row g-0">
  //         <div className="col-md-8">
  //         <div className="video-container">
  //         <video src={Weather} autoPlay muted loop  className="video">
        
  //       Your browser does not support the video tag.
  //     </video>
  //     </div>
  //         </div>
  //         <div className="col-md-4">
  //           <div className="card-body">
  //             <h5 className="card-title">5 Day Weather Forecast</h5>
  //             <p className="card-text"> </p>This is a 5 day weather forecast planner to help you plan your trip. 
  //             <p>
  //               <a href="https://github.com/CherylHemphill/5-Day-Weather-Forecast" className="card-link">
  //               <FaCode className="icon" />
  //               </a>
  //               <a href="https://cherylhemphill.github.io/5-Day-Weather-Forecast/" className="card-link">
  //               <FaLaptop className="icon" />
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>