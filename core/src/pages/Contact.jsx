import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdChat, MdCalendarToday } from 'react-icons/md';
import './Contact.css';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-container">
      {/* 🌟 Hero Section */}
      <section className="contact-hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            We’re here to help and answer any questions you might have.
            Let’s build something amazing together!
          </p>
        </div>
      </section>

      {/* 🤝 Team Contact Options Section */}
      <section className="team-contact">
        <p className="tagline">We’re Here to Help</p>
        <h2 className="team-title">
          Get in Touch with <span>Our Team</span>
        </h2>
        <p className="team-subtitle">
          Have questions about Nyukt.AI? Want to see our platform in action?
          Our team of AI experts is ready to help you transform your business operations.
        </p>

        <div className="team-contact-grid">
          <div className="team-card">
            <MdEmail className="team-icon email" />
            <h3>Email Us</h3>
            <p>Send us an email and we’ll respond within 24 hours</p>
            <p className="highlight">hello@nyukt.ai</p>
            <button className="team-btn">Send Email →</button>
          </div>

          <div className="team-card">
            <MdPhone className="team-icon phone" />
            <h3>Call Us</h3>
            <p>Speak directly with our team during business hours</p>
            <p className="highlight">+91 9876543210</p>
            <button className="team-btn">Call Now →</button>
          </div>

          <div className="team-card">
            <MdChat className="team-icon chat" />
            <h3>Live Chat</h3>
            <p>Get instant support through our live chat system</p>
            <p className="highlight">Available 24/7</p>
            <button className="team-btn">Start Chat →</button>
          </div>

          <div className="team-card">
            <MdCalendarToday className="team-icon meeting" />
            <h3>Schedule Meeting</h3>
            <p>Book a personalized demo or consultation call</p>
            <p className="highlight">Free 30-min session</p>
            <button className="team-btn">Book Now →</button>
          </div>
        </div>
      </section>

      {/* 📩 Contact Section */}
      <div className="contact-content">


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
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="How can we help you?" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
