// BackToTopButton.js
import React from 'react';

export default function BackToTopButton({ scrollToTop }) {
  return (
    <button className="back-to-top-btn" onClick={scrollToTop}>
      Back to Top
    </button>
  );
}
