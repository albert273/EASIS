'use client'
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box } from '@mui/material';

const Test = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the animation runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // React Spring animation for rotation
  const props = useSpring({
    loop: true, // Infinite loop for the animation
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 5000 }, // Adjust the speed of rotation
    pause: !isClient, // Pause if not on the client side
  });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Circle Background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#4fc3f7', // Change to your preferred color
        }}
      />

      {/* Revolving Text using SVG */}
      {isClient && (
        <animated.svg
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            transform: props.rotate.to((r) => `rotate(${r}deg)`),
          }}
        >
          <defs>
            <path
              id="textPath"
              d="M 100, 100 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="white" fontSize="12">
            <textPath href="#textPath" startOffset="0%">
              Build A Successful Brand With Demoui
            </textPath>
          </text>
        </animated.svg>
      )}

      {/* Arrow */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          fontSize: '24px',
          color: 'white',
        }}
      >
        &#8594; {/* Unicode for arrow */}
      </Box>
    </Box>
  );
};

export default Test;
