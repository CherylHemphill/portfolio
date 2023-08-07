import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-duotone-svg-icons';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div>Email: <a href="mailto:chemphill1208@gmail.com">chemphill</a></div>
      <div>LinkedIn: <a href="https://linkedin.com/in/cheryl-hemphill-a52307132">Cheryl Hemphill</a></div>
      <div>Carrier Pigeon: <FontAwesomeIcon
        icon={faDove}
        className="fa-duotone fa-xs"
        style={{
          '--fa-primary-color': '#a599b5',
          '--fa-secondary-color': '#464f51'
        }}
      /></div>
    </div>
  );
}
