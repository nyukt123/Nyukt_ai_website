import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import './Contact.css';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have questions or need more information? Reach out to us and our team will get back to you as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="How can we help you?" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Type your message here..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt size={20} />
            </div>
            <div className="info-content">
              <h4>Our Location</h4>
              <p>123 AI Street, Tech Park<br />Bangalore, Karnataka 560001</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt size={18} />
            </div>
            <div className="info-content">
              <h4>Phone Number</h4>
              <p><a href="tel:+911234567890">+91 12345 67890</a></p>
              <p><a href="tel:+911234567891">+91 12345 67891</a></p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope size={18} />
            </div>
            <div className="info-content">
              <h4>Email Address</h4>
              <p><a href="mailto:info@nyuktai.com">info@nyuktai.com</a></p>
              <p><a href="mailto:support@nyuktai.com">support@nyuktai.com</a></p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact