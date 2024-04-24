"use client"
import {useState} from 'react';
import Image from 'next/image';
import burger from "../Assets/burger.svg"
import Menu from './Menu';




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick  = () => {
      setIsActive(!isActive)
    }

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };


  return (



    <div className='fixed w-full z-50 top-0' >
    <nav className='bg-[#04091B] py-[20px] flex w-full items-center  justify-between  border-b-[1px] border-b-[#18264E] px-[216px]  max-[640px]:px-[16px]'>
      <h3 className='text-[#fff] text-[24px]' >Lahmidi</h3>
      <ul className='space-x-[25px] flex max-[640px]:hidden'>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#home">home</a></li>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#About">About me</a></li>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#Experience">Experience</a></li>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#Skills">Skills</a></li>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#Certificates">Certificates</a></li>
        <li><a onClick={handleClick} className={`hover:text-[#bedffe] text-[#ffff] transition delay-75`} href="#Projects">Projects</a></li>
      </ul>

      <button onClick={handleMenuToggle} className='max-[640px]:flex p-[10px] rounded-[3px] border-[2px] border-[#D9EAFE] hidden' >
        <Image src={burger} className='w-[18px]' />
      </button>
      {isMenuOpen === true ? (
        <Menu   isOpen={isMenuOpen} onClose={handleMenuToggle} />
      ) : (
        <></>
      ) }
    

    </nav>
    </div>
   
  );
}

export default Navbar;
