import React from 'react';
import { motion, usePresenceData } from 'motion/react';

type SlideProps = {
  children: React.ReactNode;
};

function Slide({ children }: SlideProps) {
  const direction = usePresenceData();
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 200 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { type: 'spring' },
      }}
      exit={{
        opacity: 0,
        x: direction * -200,
      }}
      style={{
        width: '100%',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Slide;
