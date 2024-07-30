// src/components/Dreams.js
import React from 'react';
import './Dreams.css';  // Import CSS for styling

const Dreams = () => {
  return (
    <section id="dreams" className="dreams-section">
      <h1>My Dreams</h1>
      <div className="dreams-content">
        <p>
          I dream of becoming a leading front-end developer, specializing in creating innovative and user-friendly interfaces.
          My goal is to work with a team of passionate developers on cutting-edge projects that make a significant impact on the tech industry.
        </p>
        <p>
          Another dream of mine is to contribute to open-source projects and build tools that help other developers.
          I aspire to mentor newcomers to the field, share my knowledge, and continuously learn from the vibrant tech community.
        </p>
        <p>
          Long-term, I hope to start my own tech company, focusing on sustainable and impactful technology solutions.
          I envision creating products that enhance people's lives and make a positive difference in the world.
        </p>
      </div>
    </section>
  );
}

export default Dreams;
