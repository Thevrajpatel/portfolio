// src/components/Contact.jsx
import React from 'react';
import './Contact.css'; // Import custom styles for the Contact component

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to send a message.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
