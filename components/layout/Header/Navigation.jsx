import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'


import logo from "./img/logo.svg";
const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
    };


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 700) {
                setIsMobileMenuOpen(true);
            } else {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navigation">
            <Link href="/" >
                <Image
                    className="navigation__logo"
                    src={logo}
                    alt="Logo Chata Růženka"
                    width={75}
                    height={75}
                />
            </Link>
            <div className="navigation__hamburger" onClick={handleMobileMenuClick}>
                <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
            </div>
            {isMobileMenuOpen && (
                <ul className="navigation__menu">
                    <li>
                        <Link href="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>DOMŮ</Link>
                    </li>
                    <li>
                        <Link href="/fotogalerie" className={activeLink === '/fotogalerie' ? 'active' : ''} onClick={() => handleLinkClick('/fotogalerie')}>FOTOGALERIE</Link>
                    </li>
                    <li>
                        <Link href="/rezervace" className={activeLink === '/rezervace' ? 'active' : ''} onClick={() => handleLinkClick('/rezervace')}>REZERVACE</Link>
                    </li>
                    <li>
                        <Link href="/cenik" className={activeLink === '/cenik' ? 'active' : ''} onClick={() => handleLinkClick('/cenik')}>CENÍK</Link>
                    </li>
                    <li>
                        <Link href="/kontakt" className={activeLink === '/kontakt' ? 'active' : ''} onClick={() => handleLinkClick('/kontakt')}>KONTAKT</Link>
                    </li>
                </ul>
            )}
            <ul className="navigation__web">
                <li>
                    <Link href="/" className={activeLink === '/' ? 'active' : ''} >DOMŮ</Link>
                </li>
                <li>
                    <Link href="/fotogalerie" className={activeLink === '/fotogalerie' ? 'active' : ''} >FOTOGALERIE</Link>
                </li>
                <li>
                    <Link href="/rezervace" className={activeLink === '/rezervace' ? 'active' : ''} >REZERVACE</Link>
                </li>
                <li>
                    <Link href="/cenik" className={activeLink === '/cenik' ? 'active' : ''} >CENÍK</Link>
                </li>
                <li>
                    <Link href="/kontakt" className={activeLink === '/kontakt' ? 'active' : ''} >KONTAKT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
