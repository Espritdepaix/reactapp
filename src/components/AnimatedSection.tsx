import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`section-animate ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;