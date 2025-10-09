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
import { Box, Grid, Card, CardContent, Typography, Button, Snackbar, Alert } from "@mui/material";
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
  // {
  //   icon: <PhoneIcon fontSize="large" sx={{ color: "green" }} />,
  //   title: "Call Us",
  //   description: "Speak directly with our team during business hours",
  //   value: "+91 97148369539",
  //   action: "Call Now",
  // },
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
export const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    fname: '',
    lname: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = 'First name is required';
    if (!formData.lname.trim()) newErrors.lname = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        fname: '',
        lname: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state if needed
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
  };

  return (
    <div className="contact-container" style={{marginTop:"100px"}}>
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

        <div className="conversation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name *</label>
                <input 
                  type="text" 
                  id="fname" 
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className={errors.fname ? 'error' : ''}
                />
                {errors.fname && <div className="error-msg">{errors.fname}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lname">Last Name *</label>
                <input 
                  type="text" 
                  id="lname" 
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className={errors.lname ? 'error' : ''}
                />
                {errors.lname && <div className="error-msg">{errors.lname}</div>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-msg">{errors.email}</div>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="text" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 Enter Number" 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
              >
                <option value="">Select</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
              </select>
              {errors.subject && <div className="error-msg">{errors.subject}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you" 
                rows="4"
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <div className="error-msg">{errors.message}</div>}
            </div>

            <button 
              type="submit" 
              className="purple-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Success Message */}
            {submitSuccess && (
              <div className="success-message" style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#f0f8f0',
                borderLeft: '4px solid #4caf50',
                borderRadius: '4px',
                color: '#2e7d32',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#4caf50"/>
                </svg>
                <div>
                  <div style={{fontSize: '0.9em'}}>Thank you for contacting us. We'll get back to you soon.</div>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
      
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
        <Box sx={{ maxWidth: '1600px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent={{ xs: 'center' }}
            sx={{
              '& > .MuiGrid-item': {
                maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(50% - 16px)', lg: '280px' },
                flex: '0 0 auto',
                width: '100%'
              }
            }}
          >
            {contactOptions.map((option, idx) => (
              <Grid item key={idx} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { 
                      boxShadow: 6,
                      transform: 'translateY(-4px)'
                    },
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 3 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Box mb={2} sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                      {option.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                      {option.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        minHeight: { xs: 'auto', sm: '48px' },
                        fontSize: { xs: '0.875rem', sm: '0.9rem' }
                      }}
                    >
                      {option.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        fontWeight: 500, 
                        color: '#111827',
                        mb: 2,
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {option.value}
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ 
                        mt: 'auto',
                        textTransform: 'none',
                        py: 1,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {option.action} →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
      </Box>

     

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

export default ContactUs;
