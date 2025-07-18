import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import "./FAQSection.css";

const categories = [
  "All Questions",
  "Plans & Billings",
  "Getting Started",
  "Features & Capabilities",
  "Security & Compliance",
];

const questions = [
  "Can I change my plan at any time?",
  "Can I change my plan at any time?",
  "Can I change my plan at any time?",
  "Can I change my plan at any time?",
  "Can I change my plan at any time?",
  "Can I change my plan at any time?",
];

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Plans & Billings");

  return (
    <Box className="faq-section">
      <Typography variant="button" className="faq-label">
        Frequently Asked Questions
      </Typography>
      <Typography variant="h4" className="faq-title">
        Get your Questions Answered
      </Typography>
      <Typography variant="body1" className="faq-subtitle">
        Find answers to common questions about Nyukt’s features, pricing, and implementation
      </Typography>

      <Box className="faq-search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search recent file or templates"
          className="faq-input"
        />
      </Box>

      <Box className="faq-category-chips">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            className={`faq-chip ${
              selectedCategory === cat ? "faq-chip-active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          />
        ))}
      </Box>

      <Box className="faq-list">
        {questions.map((q, index) => (
          <Accordion key={index} className="faq-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can change your plan at any time from your billing settings. Changes take effect immediately.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
