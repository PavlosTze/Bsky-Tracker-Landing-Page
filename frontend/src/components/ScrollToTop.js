import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling for immediate scroll
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also try after a short delay to handle any race conditions
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // Restore smooth scrolling after a brief delay
    const restoreTimeoutId = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(restoreTimeoutId);
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
