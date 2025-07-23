import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const updateProgress = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const percent = (scrollPosition / scrollTotal) * 100;

    setScrollPercent(percent);
    setVisible(scrollPosition > 100 || scrollPosition < scrollTotal - 100);
    setIsAtTop(scrollPosition < 50);
  };

  const handleScrollClick = () => {
    const scrollTarget = isAtTop
      ? document.documentElement.scrollHeight
      : 0;

    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
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
    visible && (
      <div className="scroll-progress-container" onClick={handleScrollClick}>
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
        <div className="scroll-top-btn">
          {isAtTop ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
      </div>
    )
  );
};

export default ScrollToTopButton;
