import React, { useEffect, useState } from 'react';
import './NavAnim.css'; // Ensure this file contains the animations

const NavAnim = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars at a faster interval
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * 100, // Random horizontal position
        y: Math.random() * 100, // Random vertical position
        duration: Math.random() * 2 + 1, // Random animation duration (1-3 seconds)
      };
      setStars((prevStars) => [...prevStars, newStar]);

      // Remove stars after animation
      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
      }, newStar.duration * 1000); // Match the animation duration
    }, 100); // New star every 100ms (more frequent)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: -1,
        height: '25vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background:
          'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1) 100%)',
        borderRadius: '50%',
        marginTop: '-10vh',
        overflow: 'hidden', // Clip stars to the container
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default NavAnim;
