// src/components/About.jsx
import React from 'react';
import './About.css'; // Import custom styles for the About component

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hi, I'm Vraj Patel, a passionate Software Developer with a focus on scalable solutions, game development, and web technologies. I thrive on solving complex problems and building innovative applications.
      </p>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>Java</li>
        <li>React.js</li>
        <li>SQL</li>
        <li>Three.js (coming soon!)</li>
      </ul>
    </div>
  );
}

export default About;
