import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  const updateProgress = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const percent = (scrollPosition / scrollTotal) * 100;
    setScrollPercent(percent);
    setVisible(scrollPosition > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="scroll-progress-container" onClick={scrollToTop}>
      {visible && (
        <svg height={radius * 2} width={radius * 2} className="progress-ring">
          <circle
            stroke="#f5f5f5ff"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#7c3aed"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      )}
      <div className="scroll-top-btn">
        <KeyboardArrowUpIcon />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
