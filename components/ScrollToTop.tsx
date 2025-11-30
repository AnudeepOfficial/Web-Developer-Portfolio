import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (anchor), try to scroll to that element first
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      // small delay to allow element to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
        // fallback to top if anchor not found
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 80);
      return;
    }

    // Otherwise, scroll to top on route change (instant)
    // Use requestAnimationFrame to ensure it runs after route render
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // some browsers may need both documentElement and body reset
      try {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {
        // ignore
      }
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
