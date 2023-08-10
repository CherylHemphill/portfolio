import React from 'react';
import textEditorImage from '../images/texteditor.png';
import bookSpeakImage from '../images/bookspeak.png';
import BackToTopButton from './BackToTopButton';

export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bookSpeakImage} className="img-fluid rounded-start" alt="text editor pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Book Speak</h5>
              <p className="card-text">Dive into a realm where literature comes alive as you connect with fellow bookworms in real-time discussions, sharing your passions and insights on cherished reads. </p>
              <p>
                <a href="https://github.com/CherylHemphill/Book_Speak" className="card-link">
                <i class="bi bi-code-slash"></i>
                </a>
                <a href="https://bookspeakreview-69dfe59a4804.herokuapp.com/" className="card-link">
                <i class="bi bi-display"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={textEditorImage} className="img-fluid rounded-start" alt="text editor pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Just Another Text Editor</h5>
              <p className="card-text">Text editor empowers you to craft expressive notes and code snippets seamlessly, regardless of your internet connection.</p>
              <p>
                <a href="https://github.com/CherylHemphill/Text-Editor" className="card-link">
                <i class="bi bi-code-slash"></i>
                </a>
                <a href="https://snippet-editor-c34410eeb2c1.herokuapp.com/" className="card-link">
                <i class="bi bi-display"></i> 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton scrollToTop={scrollToTop} />
    </div>
  );
}

