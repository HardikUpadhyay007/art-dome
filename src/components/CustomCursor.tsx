import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        getComputedStyle(target).cursor === 'pointer'
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // Only visible on desktop
  return (
    <>
      <div 
        className={`hidden md:block fixed rounded-full pointer-events-none z-50 transition-transform duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          backgroundColor: isClicking ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(4px)',
          transform: 'translate(-50%, -50%) scale(1)',
          mixBlendMode: 'difference',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, transform 0.1s'
        }}
      ></div>
      <div 
        className={`hidden md:block fixed rounded-full pointer-events-none z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s'
        }}
      ></div>
    </>
  );
};

export default CustomCursor;