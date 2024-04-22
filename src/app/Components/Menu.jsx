"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Close from "../Assets/Close.svg";


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
      className="fixed inset-0  bg-opacity-75 flex justify-center items-start z-50"
      initial={{ opacity: 0 }}
      animate={menuAnimation}
    >
      <motion.div
        className="bg-[#04091B] w-full h-full items-center  flex flex-col p-4"
        initial={{ y: '-100%' }}
        animate={menuAnimation}
      >
        <button onClick={handleClose} className=" p-[10px] rounded-[5px] border-[2px] border-[#D9EAFE]">
          <Image src={Close} />
        </button>
        <ul className="mt-8 text-center space-y-[10px]">
          <li>
            <a onClick={onClose} href="#home" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              home
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#About" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              About me
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#Experience" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              Experience
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#Skills" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              Skills
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#Certificates" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              Certificates
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#Projects" className="hover:text-[#bedffe] text-[#ffff] transition delay-75">
              Projects
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
