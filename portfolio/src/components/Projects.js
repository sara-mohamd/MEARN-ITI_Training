// src/components/Projects.js
import React from 'react';
import './Projects.css';  // Import CSS for styling

const projects = [
  {
    name: 'Airbnb Clone',
    description: 'Developed a clone of Airbnb using Python and Flask. Implemented features like user authentication, property listing, and booking management.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfILvf9ugM1_MpKJF0hMnj9GrVCefpsmiF5A&s'
  },
  {
    name: 'Booking Plane Reservation System',
    description: 'Created a plane reservation system for booking flights. It includes features for searching flights, booking reservations, and managing user accounts.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNNvyBuNsb4GsclBPEWcw3rdemWDtpMN3Hw&s'
  },
  {
    name: 'Recipe Website',
    description: 'Built a recipe website to share and discover new recipes. Features include recipe submission, search functionality, and user reviews.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0WFItaB7MtUDzNnUqI8uoOTbog_cdUUe1A&s'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
