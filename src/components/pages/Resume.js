import React from 'react';
import backgroundImage from '../../images/emay-nightSky.jpg'

export default function Resume() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  

    return (
      <div style={backgroundStyle}>
        <div className="container-resume" id='resume'>
            <h1>Cheryl Hemphill</h1>
            <p><a href="mailto:chemphill1208@gmail.com">chemphill1208@gmail.com</a> | 325.374.2597 | Luling, TX</p> 
            <p>
               <span className="contact-link">
                LinkedIn: <a href="https://linkedin.com/in/cheryl-hemphill-a52307132">Cheryl Hemphill</a>
          </span>
         <span className="contact-link">
                GitHub: <a href="https://github.com/CherylHemphill">CherylHemphill</a>
         </span></p>

      <p>
      For the past 14 years, I have been immersed in the dynamic world of the medical field. Recently, I embarked on an exciting career transition into web development. While delving into this new realm, I found a particular passion for backend development, relishing the challenges it presents. However, I am also well-equipped to handle full-stack applications, thanks to the comprehensive skills I've acquired throughout my learning process.
      </p>

      <h2>Technical Skills</h2>
      <p>
        <strong>Frontend:</strong> HTML5, CSS, JavaScript, Bootstrap, Bulma, JQuery, JSON, RESTful APIs, Grid/Flexbox, Responsiveness, Accessibility, AJAX, Git
        <br />
        <strong>Backend:</strong> Node.js, Express, SQL/MySQL, Sequelize, Mongo/Mongoose, Jest, Handlebars, ES6, OOP, MVA, Webpack, Insomnia/Postman testing, Socket.io
      </p>

      <h2>Projects</h2>
      <p>
        <strong>Bored AF</strong> | <a href="https://github.com/CherylHemphill/Bored-AF">GitHub</a><br />
        Unlock your creativity and spontaneity with our app that provides personalized, randomly generated activities, perfect for those moments when you need inspiration to plan your next adventure.
        <br />
        <strong>Responsibility:</strong> HTML, CSS, Bulma Framework
      </p>
      
      <p>
        <strong>BookSpeak</strong> | <a href="https://github.com/CherylHemphill/Book_Speak">GitHub</a><br />
        Immerse yourself in the captivating world of literature with BookSpeak, a dynamic book application offering access to trending books, insightful reviews, and an engaging chat platform to connect with fellow book enthusiasts and discuss your favorite reads.
        <br />
        <strong>Responsibility:</strong> Websockets, Handlebars, Express, bcrypt, Sequelize, file structure
      </p>

      <h2> Work Experience</h2>
      <p>
        <strong>Physical Therapist Assistant</strong> | Texas | 2009 - present<br />
        Collaborated closely with patients and a multidisciplinary team to design and implement personalized treatment plans, showcasing strong communication and teamwork skills.
        <br />
        Utilized problem-solving abilities to assess patients' needs, identify challenges, and develop effective therapeutic solutions, demonstrating analytical thinking and attention to detail.
        <br />
      </p>

      <h2>Education</h2>
      <p>
        <strong>University of Texas at Austin</strong>- Center of Professional Education<br />
        Full Stack Coding Bootcamp Certificate    |    Completion Date: August 31, 2023
      </p>
      <div className="download-button">
  <a href="https://drive.google.com/uc?export=download&id=1YwIriezwVrPkiU8kR0gVFYFTUu5vewB_" download>
    Download Resume (PDF)
  </a>
</div>
        </div>
        </div>
    );
}