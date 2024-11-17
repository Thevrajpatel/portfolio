// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // Import custom styles for the Projects component

function Projects() {
  const projects = [
    {
      name: 'Banking Management System',
      description: 'A project built using SQL for managing banking operations efficiently.',
      link: '#'
    },
    {
      name: 'Jump Guy',
      description: 'A Unity 2D platformer game developed for beginners, featuring fun mechanics.',
      link: '#'
    },
    {
      name: 'Lifetime Group',
      description: 'A live business website hosted on GitHub Pages, built using modern web technologies.',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
