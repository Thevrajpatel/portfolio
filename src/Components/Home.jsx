// src/components/Home.jsx
import React from 'react';
import './Home.css'; // Import custom styles for the Home component

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m Vraj Patel, a Software Developer specializing in scalable solutions, game development, and web technologies.</p>
        <button className="explore-button">Explore My Work</button>
      </div>
    </div>
  );
}

export default Home;
