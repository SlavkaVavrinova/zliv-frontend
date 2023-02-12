import { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'


import logo from "./img/logo.svg";

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const closeMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const activeMenuItem = ({ isActive }) =>
      isActive ? 'navigationLarge__link activeItem' : 'navigationLarge__link';

  return (
        <div className="navigation">
          <Link href="/">
            <Image
                className="logo"
                src={logo}
                alt="Logo Chata Růženka"
                width={50}
                height={50}
            />
          </Link>

          <span
              className={
                isMenuOpened
                    ? 'navigation__hamburger open'
                    : 'navigation__hamburger'
              }
              onClick={openMenu}
          >
          <span className="navigation__rows"></span>
        </span>
          {isMenuOpened ? (
              <ul ref={mobileMenuRef} className="noDot navigation-open">
                <div className="hamburger__close" onClick={closeMenu}></div>
                <li className="navigation__item">
                  <Link href="/"
       //                 className={activeMenuItem}
                        onClick={openMenu}>
                    DOMŮ
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link
                      href="/fotogalerie"
     //                 className={activeMenuItem}
                      onClick={openMenu}
                  >
                    FOTOGALERIE
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link

                      href="/rezervace"
                   //   className={activeMenuItem}
                      onClick={openMenu}
                  >
                    REZERVACE
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link
                      href="/cenik"
                     // className={activeMenuItem}
                      onClick={openMenu}
                  >
                    CENÍK
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link
                      href="/kontakt"
               //       className={activeMenuItem}
                      onClick={openMenu}
                  >
                    KONTAKT
                  </Link>
                </li>
              </ul>
          ) : null}
          <ul className="navigation__large noDot">
            <li className="navigation__item">
              <Link href="/"
         //           className={activeMenuItem}
                  >
                DOMŮ
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/fotogalerie"
         //           className={activeMenuItem}
              >
                FOTOGALERIE
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/rezervace"
        //            className={activeMenuItem}
              >
                REZERVACE
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/cenik"
         //           className={activeMenuItem}
              >
                CENÍK
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/kontakt"
        //            className={activeMenuItem}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
   );
};

export default Navigation;
