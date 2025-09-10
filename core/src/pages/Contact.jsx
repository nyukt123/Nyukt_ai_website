import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdChat, MdCalendarToday } from "react-icons/md";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./Contact.css";
import FAQSection from "../components/Pricing/FAQSection";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
// import dubai from "../../assets/images/Dubai-new.png";

const contactOptions = [
  {
    icon: <EmailIcon fontSize="large" sx={{ color: "#7C3AED" }} />,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    value: "info@nyukt.ai",
    action: "Send Email",
  },
  {
    icon: <PhoneIcon fontSize="large" sx={{ color: "green" }} />,
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    value: "+91 97148369539",
    action: "Call Now",
  },
  // {
  //   icon: <ChatIcon fontSize="large" sx={{ color: "teal" }} />,
  //   title: "Live Chat",
  //   description: "Get instant support through our live chat system",
  //   value: "Available 24/7",
  //   action: "Start Chat",
  // },
  // {
  //   icon: <CalendarTodayIcon fontSize="large" sx={{ color: "blue" }} />,
  //   title: "Schedule Meeting",
  //   description: "Book a personalized demo or consultation call",
  //   value: "Free 30-min session",
  //   action: "Book Now",
  // },
];
const OFFICE_DATA = [
  {
    name: "Dubai",
    country: "UAE",
    role: "Head Quarter",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "#7C3AED",
    email: "privacy@nyukt.com",
    // website: "hq@nyukt.com",
    address: "Unit 147, Innovation Hub Gate Avenue - South Zone DIFC."
  },
  {
    name: "Bangalore",
    country: "India",
    role: "Tech Center",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "#9333EA",
    email: "privacy@nyukt.com",
    // website: "hq@nyukt.com",
    address: "311, ZED PINNACLE, Koramangala, Bengaluru, Karnataka 560095"
  },
  {
    name: "Bhubaneswar",
    country: "India",
    role: "R&D Center",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "#8B5CF6",
    email: "privacy@nyukt.com",
    // website: "hq@nyukt.com",
    address: "M1, IT Park Afixi Ln, IT Park Rd, Bhubaneswar, Odisha 751024"
  }
];
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="contact-container">
      {/* 🌟 Hero Section */}

      <Box sx={{ backgroundColor: "#f5f3ff", py: 10, mt: 6 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="caption"
            sx={{
              px: 2,
              py: 0.5,
              backgroundColor: "#E5E7EB",
              borderRadius: "20px",
              fontWeight: 500,
            }}
          >
            We’re Here to Help
          </Typography>

          <Typography
            variant="h4"
            sx={{ mt: 3, fontWeight: "bold", color: "#111827" }}
          >
            Get in Touch with{" "}
            <Box component="span" sx={{ color: "#7C3AED" }}>
              Our Team
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, color: "#4B5563", maxWidth: "700px", mx: "auto" }}
          >
            Have questions about Nyukt.AI? Want to see our platform in action? Our
            team of AI experts is ready to help you transform your business
            operations.
          </Typography>
        </Box>

        {/* Contact Cards */}
        <Grid
          container
          flexWrap="nowrap"
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            maxWidth: "1600px",
            mx: "auto",
            px: 3,
            justifyContent: "center",
            "& > *": {
              flex: "0 0 calc(25% - 16px)",
              maxWidth: "calc(25% - 16px)",
              m: 2,
            },
          }}
        >
          {contactOptions.map((option, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: 3,
                  height: "100%",
                  textAlign: "center",
                  p: 2,
                  "&:hover": { boxShadow: 6, transition: "0.3s" },
                }}
              >
                <CardContent>
                  <Box mb={2}>{option.icon}</Box>
                  <Typography variant="h6" fontWeight="600">
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, color: "text.secondary", minHeight: "48px" }}
                  >
                    {option.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: 500, color: "#111827" }}
                  >
                    {option.value}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, textTransform: "none" }}
                  >
                    {option.action} →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ✨ Conversation Section (New Design) */}
      <section className="conversation-section">
        <div className="conversation-left">
          <button className="purple-btn">Send us a Message</button>
          <h2>Let’s Start a Conversation</h2>
          <p>
            Whether you’re looking to automate your workflows, need technical
            support, or want to explore partnership opportunities, we’re here to
            help.
          </p>

          <div className="conversation-features">
            <div className="feature-item">
              <span className="icon purple">⏱️</span>
              <div>
                <h4>Response Time</h4>
                <p>We typically respond within 24 hours during business days</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="icon blue">🤝</span>
              <div>
                <h4>Expert Support</h4>
                <p>Connect directly with our AI specialists and technical team</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="icon green">🔒</span>
              <div>
                <h4>Privacy First</h4>
                <p>
                  Your information is secure and never shared with third parties
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📩 Form Side */}
        <div className="conversation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" placeholder="Enter First Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" placeholder="Enter Last Name" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="+91 Enter Number" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option>Select</option>
                <option>Product Inquiry</option>
                <option>Partnership</option>
                <option>Support</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us how we can help you" />
            </div>

            <button type="submit" className="purple-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section>
        {/* 🌍 Global Offices Section */}
        <Box sx={{ backgroundColor: "#ffffff", py: 10 }}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="caption"
              sx={{
                px: 2,
                py: 0.5,
                backgroundColor: "#1364FE",
                color: "#fff",
                borderRadius: "20px",
                fontWeight: 500,
              }}
            >
              Global Presence
            </Typography>

            <Typography variant="h4" sx={{ mt: 3, fontWeight: "bold", color: "#111827" }}>
              Our Offices Worldwide
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#4B5563", maxWidth: "700px", mx: "auto" }}
            >
              We’re building a global community of AI innovation with offices strategically
              located to serve our customers and partners around the world.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" sx={{ px: 3, maxWidth: '1200px', mx: 'auto' }}>
            {OFFICE_DATA.map((office) => (
              <Grid item xs={12} sm={6} md={4} key={office.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{
                  borderRadius: '16px',
                  boxShadow: 3,
                  width: 360,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}>
                  <Box
                    sx={{
                      height: 300,
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${office.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '20px',
                      color: 'white'
                    }}
                  >
                    <div>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                        {office.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        {office.country}
                      </Typography>
                    </div>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'inline',
                        backgroundColor: office.color,
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '5px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {office.role}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>

                      {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ color: office.color, mt: 0.5 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {office.website}
                        </Typography>
                      </Box> */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ color: office.color, mt: 0.5 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {office.address}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      {/* <section className="subscribe-container">
        <div className="subscribe-content">
          <Typography variant="h5" className="subscribe-title">
            Stay Updated with Nyukt
          </Typography>
          <Typography className="subscribe-subtitle">
            Get the latest updates on AI automation, new features, and industry
            insights delivered to your inbox.
          </Typography>

          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="subscribe-input"
              style={{ width: '100%' }}
            />
            <button type="submit" className="subscribe-button" style={{ width: '150px' }}>
              Subscribe
            </button>
          </form>

          <Typography className="subscribe-note">
            No spam, unsubscribe at any time. We respect your privacy.
          </Typography>
        </div>
      </section> */}

      {/* <FAQSection /> */}
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </div>
  );
};






export default Contact;
