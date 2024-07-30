// src/components/Contact.js
import React from 'react';
import './Contact.css';  // Import CSS for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href="mailto:saraamohamed0038@gmail.com">saraamohamed0038@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sara-mohamed-b8b668256/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </p>
        <p>
          <strong>Phone Number:</strong> 123 456 789
        </p>
      </div>
    </section>
  );
}

export default Contact;
