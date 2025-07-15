import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Rating,
} from "@mui/material";
import "./TestimonialSection.css";
import fui from "../../assets/icons/fi_25672.png"; // Replace QuoteIcon
import userImage from "../../assets/userImage.png";
import badgeImage from "../../assets/badgeimg.png";

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Jones",
    title: "Head of Customer Experience",
    company: "TechStream Inc.",
    text: "Nyukt has revolutionized how we handle customer support. Our response times have decreased by 75% while customer satisfaction scores have increased by 30%. The platform is intuitive and powerful.",
    tags: ["Customer Support", "75% Faster Response"],
    rating: 5,
    avatar: userImage,
    badge: badgeImage,
  },
  {
    name: "Sarah Jones",
    title: "Head of Customer Experience",
    company: "TechStream Inc.",
    text: "Nyukt has revolutionized how we handle customer support. Our response times have decreased by 75% while customer satisfaction scores have increased by 30%. The platform is intuitive and powerful.",
    tags: ["Customer Support", "75% Faster Response"],
    rating: 5,
    avatar: userImage,
    badge: badgeImage,
  },
];

// Testimonial Card
const TestimonialCard = ({ testimonial }) => (
  <Card className="testimonial-card">
    <CardContent>
      {/* 🔸 Top Section with tags and rating */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Box display="flex" gap={1}>
          {testimonial.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              className={`testimonial-chip
              ${tag.includes("Faster") ? "green" : ""} 
              ${tag.includes("Customer") ? "purple" : ""}`}
            />
          ))}
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Rating value={testimonial.rating} readOnly size="small" />
        </Box>
      </Box>

   <Box className="testimonial-text" display="flex" alignItems="flex-start" gap={1}>
  <img src={fui} alt="icon" className="fui-icon" />
  <Typography variant="body1" component="p">
    "{testimonial.text}"
  </Typography>
</Box>


      {/* 🔸 Footer Section */}
    <Box className="testimonial-footer">
  <Box display="flex" alignItems="center" gap={2}>
    <Avatar src={testimonial.avatar} alt={testimonial.name} className="testimonial-avtar" />
    <Box className="testimonial-user-info">
      <Typography variant="subtitle1" className="testimonial-name">
        {testimonial.name}
      </Typography>
      <Typography variant="body2" className="testimonial-meta">
        {testimonial.title} 
      </Typography>
       <Typography variant="body2" className="testimonial-meta-sub">
         {testimonial.company}
      </Typography>
    </Box>
  </Box>
  <Box textAlign="right" className="testimonial-right-section">
    <img src={testimonial.badge} alt="badge" className="badge-img" />
  </Box>
</Box>

    </CardContent>
  </Card>
);

// Section
const TestimonialSection = () => {
  return (
    <Box className="testimonial-wrapper">
      <Typography variant="h4" className="testimonial-heading">
        What Our <span className="gradient-text">Customers</span> Say
      </Typography>
      <Typography variant="body1" className="testimonial-subtext">
        Discover how organizations are transforming their operations with Nyukt AI agents and achieving remarkable results.
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={5}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
