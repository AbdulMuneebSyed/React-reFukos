import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ urls, index }) => {
  // Combine the URLs for seamless looping
  const combinedUrls = urls.concat(urls);

  // Define the scroll distance based on the total number of images
  const scrollDistance = 100 / urls.length;

  // Set initial and animate values based on index
  const initialPosition = index === 0 ? { x: 0 } : { x: `-${scrollDistance}%` };
  const animatePosition = index === 0 ? { x: `-${scrollDistance * urls.length}%` } : { x: 0 };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={initialPosition}
        animate={animatePosition}
        transition={{ ease: "linear", duration: 10, repeat: Infinity, repeatType: "loop" }}
        className="flex gap-24 py-10"
      >
        {combinedUrls.map((ele, i) => (
          <img
            src={ele}
            key={i}
            alt=""
            style={{ width: '200px', height: 'auto' }} // Adjust width according to your image size
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
