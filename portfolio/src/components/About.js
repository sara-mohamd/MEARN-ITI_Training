// src/components/About.js
import React from 'react';
import './About.css';  // Import CSS for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM9TbrVSGfC0DYbUhLJcyJakjKGBDVsJqEw&s"
          alt="Sara Mohamed"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello! My name is Sara Mohamed. I am 20 years old and currently in my third year at Beni-Suef University, studying Computer Science.
            I have a passion for front-end development and am excited to showcase my skills through this portfolio.
          </p>
          <p>
            In my spare time, I enjoy working on personal projects, exploring new technologies, and learning new programming languages.
            I am constantly striving to improve my skills and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
