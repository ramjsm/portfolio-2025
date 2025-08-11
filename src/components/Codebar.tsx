import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CodeBar = () => {
  const barRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    // Prepare lines ref array length
    linesRef.current = linesRef.current.slice(0, 32);
  }, []);

  const onMouseEnter = () => {
    gsap.to(linesRef.current, {
      duration: 0.5,
      y: (i) => (i % 2 === 0 ? 20 : -20),
      scaleX: 1.5,
      ease: 'power2.out',
      stagger: 0.05,
    });
  };

  const onMouseLeave = () => {
    gsap.to(linesRef.current, {
      duration: 0.5,
      y: 0,
      scaleX: 1,
      ease: 'power2.out',
      stagger: 0.05,
    });
  };

  return (
    <div
      ref={barRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '5px 0',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {[...Array(32)].map((_, i) => (
        <div
          key={i}
          ref={el => linesRef.current[i] = el}
          style={{
            height: '100%',
            width: Math.random(2, 5),
            background: '#f1f1f1',
            borderRadius: 1,
            // marginRight: 2
            // transformOrigin: 'center left',
          }}
        />
      ))}
    </div>
  );
};

export default CodeBar;
