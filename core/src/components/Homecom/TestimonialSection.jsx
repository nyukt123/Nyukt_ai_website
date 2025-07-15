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
import QuoteIcon from "@mui/icons-material/FormatQuote";
import fui from "../../assets/icons/fi_25672.png";

// 🧑 Replace with your actual image paths
import userImage from "../../assets/userImage.png";
import badgeImage from "../../assets/badgeimg.png";

// 🔹 Testimonials Data
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

// 🔹 Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <Card className="testimonial-card">
    <CardContent>
      <Box display="flex" gap={1} mb={2}>
        {testimonial.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            className={`testimonial-chip ${tag.includes("Faster") ? "green" : ""}`}
          />
        ))}
        <Rating value={testimonial.rating} readOnly size="small" />
      </Box>

      <QuoteIcon className="quote-icon" />

      <Typography variant="body1" className="testimonial-text">
        "{testimonial.text}" 
      </Typography>

      <Box className="testimonial-footer">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={testimonial.avatar} alt={testimonial.name} />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonial.title}<br />
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

// 🔹 Testimonial Section Component
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
