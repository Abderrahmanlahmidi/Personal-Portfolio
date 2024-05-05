import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import burger from '../Assets/burger.svg';
import Menu from './Menu';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY === 0) {
                setActiveLink('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About me', id: 'About' },
        { label: 'Experience', id: 'Experience' },
        { label: 'Skills', id: 'Skills' },
        { label: 'Certificates', id: 'Certificates' },
        { label: 'Projects', id: 'Projects' }
    ];

    return (
        <div className="fixed w-full z-50 top-0">
            <nav className="bg-[#04091B] py-[15px] flex w-full items-center justify-between border-b-[1px] border-b-[#18264E] px-[216px] max-[640px]:px-[16px]">
                <a href="#home" className="text-[#fff] text-[24px]">
                    <span className="font-[600] text-[#bedffe] text-[24px]">L</span>
                    ahmidi.
                </a>
                <ul className="space-x-[25px] flex max-[640px]:hidden">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                onClick={() => handleLinkClick(item.id)}
                                className={`hover:text-[#bedffe] text-[#ffff] transition delay-75 ${
                                    activeLink === item.id && 'text-customBlue'
                                }`}
                                href={`#${item.id}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={handleMenuToggle} className="max-[640px]:flex p-[10px] rounded-[3px] border-[2px] border-[#D9EAFE] hidden">
                    <Image src={burger} className="w-[18px]" />
                </button>
                {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={handleMenuToggle} activeLink={activeLink} />}
            </nav>
        </div>
    );
}

export default Navbar;
