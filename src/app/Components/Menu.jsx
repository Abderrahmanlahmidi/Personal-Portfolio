"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Menu = ({ isOpen, onClose }) => {
  const menuAnimation = useAnimation();

  // Define animations
  const openAnimation = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  };

  const closeAnimation = {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.3,
    },
  };

  // Handle menu close
  const handleClose = () => {
    menuAnimation.start(closeAnimation).then(onClose);
  };

  // Run animation when isOpen prop changes
  useEffect(() => {
    if (isOpen) {
      menuAnimation.start(openAnimation);
    } else {
      handleClose();
    }
  }, [isOpen]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#04091B] bg-opacity-75 flex justify-center items-start z-50"
      initial={{ opacity: 0 }}
      animate={menuAnimation}
    >
      <motion.div
        className="bg-white w-64 flex flex-col p-4"
        initial={{ y: '-100%' }}
        animate={menuAnimation}
      >
        <button onClick={handleClose} className="self-end text-gray-700">
          Close
        </button>
        <ul className="mt-8">
          <li className="mb-4">
            <a href="#" className="text-white">
              Link 1
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white">
              Link 2
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
