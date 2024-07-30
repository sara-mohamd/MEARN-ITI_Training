// src/components/Skills.js
import React from 'react';
import './Skills.css';  // Import CSS for styling

const skills = [
  {
    name: 'JavaScript',
    description: 'Proficient in JavaScript, including ES6+ features. Experienced with asynchronous programming and DOM manipulation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lfr8Fpqxwnd6ryKPR8Kq2zBwPunyOMP1Wg&s'
  },
  {
    name: 'React',
    description: 'Experienced in building dynamic user interfaces using React. Skilled in managing state, props, and component lifecycle.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxlPHK-Qs1oagN2ezTnoM1nhr5IGsCPqwkQ&s'
  },
  {
    name: 'CSS',
    description: 'Strong knowledge of CSS, including Flexbox and Grid. Adept at creating responsive designs and using preprocessors like SASS.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG3kN4_Me43M3PhswT3YgDH7X23ttexfmwg&s'
  },
  {
    name: 'Python',
    description: 'Experience in Python for web development with Flask, data analysis, and automation scripts.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MoqYqZtnCAotP3APpTCUP0xTZ-RezEq1Xg&s'
  },
  {
    name: 'Git',
    description: 'Proficient in version control using Git. Experienced with branching, merging, and collaborating on projects.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb-AAIFFETEbbKf65WtEmY5q1xg1XFghyDQ&s'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
            <h2 className="skill-name">{skill.name}</h2>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
