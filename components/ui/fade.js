'use client'

import { useEffect } from 'react';

export function useFadeHero() {
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection.clientHeight;

      if (scrollY > heroHeight) {
        heroSection.style.opacity = 1 - (scrollY - heroHeight) / heroHeight;
      } else {
        heroSection.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}