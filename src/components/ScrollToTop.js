// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds a smooth scrolling effect
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
