import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bimage from '../assets/content.jpg'

const ExpandingBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600); // Delay before starting the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mt-3'>
      {isVisible && (
        <motion.div
          initial={{ width: 0.5 }}
          animate={{ width: '10vw' }}
          transition={{ duration: 1 ,ease:'easeInOut'}} // Adjust the duration as needed
          style={{
            height: '6vw',
            backgroundImage:`url(${bimage})`,
            backgroundSize: 'cover',
            borderRadius:'16px',
          }}
        />
      )}
    </div>
  );
};

export default ExpandingBox;
