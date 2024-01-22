import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/MOFlogo.png';
import '../components/Navbar.css';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const lngs = {
  en: { nativeName: 'English' },
  la: { nativeName: 'Lao' }
};

const IndexNavbar2 = () => {
  const { t, i18n } = useTranslation();

  // State for managing the navbar's background color
  const [color, setColor] = useState(false);

  // Function to change the navbar's background color based on scroll position
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Add event listener to window for scroll event
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // State for managing the mobile menu
  const [click, setClick] = useState(false);

  // Function to handle the mobile menu click event
  const handleClick = () => setClick(!click);

  // Function to close the mobile menu
  const closeMenu = () => setClick(false);

  // State for managing the submenu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Function to toggle the submenu
  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
  };

  useEffect(() => {
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    return () => {
      hamburgerButton.removeEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    };
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
        {click ? <FaTimes size={30} style={{ color: '#ffffff' }} /> : <FaBars size={30} style={{ color: '#ffffff' }} />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='btn btn-ghost rounded-btn'>
            <a href='/' onClick={closeMenu}>
              {t('translation:menu1')}
            </a>
          </li>
          <li className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost rounded-btn'
              onClick={toggleSubMenu}
            >
              {t('translation:menu2')}
            </div>
            <ul
              tabIndex={0}
              id='dropdown-menu'
              className={`menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black ${
                isSubMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <li className='group'>
                <div className='dropdown dropdown-right'>
                  <a
                    onClick={toggleSubMenu}
                    className='group flex items-center cursor-pointer'
                  >
                    <span>Law</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className={`w-4 h-4 ml-2 ${
                        isSubMenuOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 15l7-7 7 7'
                      />
                    </svg>
                  </a>
                  <ul
                    tabIndex={0}
                    className={`dropdown-content z-[1] menu p-2 w-52 ${
                      isSubMenuOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a
                        href='/law-on-state-governor-and-manage'
                        className='menu p-2 shadow bg-base-100 rounded-box'
                        onClick={closeMenu}
                      >
                        Law on State Governor and Manage
                      </a>
                    </li>
                    <li>
                      <a
                        href='/economic-law'
                        className='menu p-2 shadow bg-base-100 rounded-box'
                        onClick={closeMenu}
                      >
                        Economic Law
                      </a>
                    </li>
                    <li>
                      <a
                        href='/laws-on-culture-socials'
                        className='menu p-2 shadow bg-base-100 rounded-box'
                        onClick={closeMenu}
                      >
                        Law on Cultural-Social
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href='/decree' onClick={closeMenu}>
                  Decree
                </a>
              </li>
              <li>
                <a href='/ordinance' onClick={closeMenu}>
                  Ordinance
                </a>
              </li>
              <li>
                <a href='/agreement' onClick={closeMenu}>
                  Agreement
                </a>
              </li>
              <li>
                <a href='/instruction' onClick={closeMenu}>
                  Instruction
                </a>
              </li>
              <li>
                <a href='/announcement-and-instruction' onClick={closeMenu}>
                  Announcement and Instruction
                </a>
              </li>
            </ul>
          </li>
          <li className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost rounded-btn'
            >
              {t('translation:menu3')}
            </div>
            <ul
              tabIndex={0}
              id='dropdown-menu'
              className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
            >
              <li>
                <a href='/finance-news' onClick={closeMenu}>
                  Finance News
                </a>
              </li>
              <li>
                <a href='/television' onClick={closeMenu}>
                  Television
                </a>
              </li>
            </ul>
          </li>
          <li className='btn btn-ghost rounded-btn'>
            <a href='/publication-and-statistics' onClick={closeMenu}>
              {t('translation:menu4')}
            </a>
          </li>
          <li className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost rounded-btn'
            >
              {t('translation:menu5')}
            </div>
            <ul
              tabIndex={0}
              id='dropdown-menu'
              className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
            >
              <li>
                <a href='/roles-and-responsibilities' onClick={closeMenu}>
                  Roles and Responsibilities
                </a>
              </li>
              <li>
                <a href='/organization-and-structure' onClick={closeMenu}>
                  Organisation and Structure
                </a>
              </li>
              <li>
                <a href='/contact' onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </li>
          <LanguageToggle i18n={i18n} lngs={lngs} />
        </ul>
      </nav>
    </div>
  );
};

export default IndexNavbar2;





// import React, { useEffect, useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from './images/MOFlogo.png';
// import '../components/Navbar2.css';
// import { useTranslation } from 'react-i18next';
// import LanguageToggle from './LanguageToggle';

// const lngs = {
//   en: { nativeName: 'English' },
//   la: { nativeName: 'Lao' }
// };

// const IndexNavbar2 = () => {
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const lng = navigator.language;
//     i18n.changeLanguage(lng);
//   }, []);

//   const toggleSubMenu = (e) => {
//     e.preventDefault();
//     setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
//   };

//   const [anchorEl, setAnchorEl] = useState(null);

//   const [color, setColor] = useState(false);

//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <div className={`header ${color ? 'header-bg' :''}`}>
//       <nav className="navbar">
//         <a href="/" className="logo">
//           <img src={logo} alt="logo" />
//         </a>
//         <div className='hamburger' onClick={handleClick}>
//           {click ? <FaTimes size={30} style={{ color: '#ffffff' }} /> : <FaBars size={30} style={{ color: '#ffffff' }} />}
//         </div>
//         <ul className={`nav-menu ${click ? 'active' : ''}`}>
//           <div className='flex justify-end flex-1 px-2'>
//             <div className='flex items-stretch'>
//               <li className='btn btn-ghost rounded-btn'>
//                 <a href='/'>
//                   {t('translation:menu1')}
//                 </a>
//               </li>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu2')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li className='group'>
//                     <div
//                       className={`dropdown dropdown-right ${
//                         isSubMenuOpen ? 'open' : ''
//                       }`}
//                     >
//                       <a
//                         onClick={toggleSubMenu}
//                         className='group flex items-center cursor-pointer'
//                       >
//                         <span>Law</span>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                           className={`w-4 h-4 ml-2 ${
//                             isSubMenuOpen ? 'rotate-180' : ''
//                           }`}
//                         >
//                           <path
//                             strokeLinecap='round'
//                             strokeLinejoin='round'
//                             strokeWidth='2'
//                             d='M5 15l7-7 7 7'
//                           />
//                         </svg>
//                       </a>
//                       <ul
//                         tabIndex={0}
//                         className={`dropdown-content z-[1] menu p-2 w-52 ${
//                           isSubMenuOpen ? 'block' : 'hidden'
//                         }`}
//                       >
//                         <li>
//                           <a
//                             href='/law-on-state-governor-and-manage'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Law on State Governor and Manage
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href='/economic-law'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Economic Law
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href='/laws-on-culture-socials'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Law on Cultural-Social
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                   <li>
//                     <a href='/decree'>Decree</a>
//                   </li>
//                   <li>
//                     <a href='/ordinance'>Ordinance</a>
//                   </li>
//                   <li>
//                     <a href='/agreement'>Agreement</a>
//                   </li>
//                   <li>
//                     <a href='/instruction'>Instruction</a>
//                   </li>
//                   <li>
//                     <a href='/announcement-and-instruction'>
//                       Announcement and Instruction
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu3')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li>
//                     <a href='/finance-news'>Finance News</a>
//                   </li>
//                   <li>
//                     <a href='/television'>Television</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className='flex items-stretch'>
//                 <li className='btn btn-ghost rounded-btn'>
//                   <a href='/publication-and-statistics'>{t('translation:menu4')}</a>
//                 </li>
//               </div>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu5')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li>
//                     <a href='/roles-and-responsibilities'>
//                       Roles and Responsibilities
//                     </a>
//                   </li>
//                   <li>
//                     <a href='/organization-and-structure'>
//                       Organisation and Structure
//                     </a>
//                   </li>
//                   <li>
//                     <a href='/contact'>Contact</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <LanguageToggle i18n={i18n} lngs={lngs} />
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default IndexNavbar2;

// import React, { useEffect, useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from './images/MOFlogo.png';
// import '../components/Navbar2.css';
// import { useTranslation } from 'react-i18next';
// import LanguageToggle from './LanguageToggle';

// const lngs = {
//   en: { nativeName: 'English' },
//   la: { nativeName: 'Lao' }
// };

// const IndexNavbar2 = () => {
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const lng = navigator.language;
//     i18n.changeLanguage(lng);
//   }, []);

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [color, setColor] = useState(false);
  
//   const closeMenu = () => setClick(false);

//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const toggleSubMenu = (e) => {
//     e.preventDefault();
//     setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
//   };

//   const [click, setClick] = useState(false);
//   const handleClick = () => {
//     setClick(!click);
//     const navMenu = document.querySelector('.nav-menu');
//     navMenu.classList.toggle('active');
//   };

//   return (
//     <div className="header header-bg">
//       <nav className='navbar'>
//         <a href='/' className='logo'>
//           <img src={logo} alt='logo' />
//         </a>
//         <div className='hamburger' onClick={handleClick}>
//           {click ? (
//             <FaTimes size={30} style={{ color: '#ffffff' }} />
//           ) : (
//             <FaBars size={30} style={{ color: '#ffffff' }} />
//           )}
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <div className='flex justify-end flex-1 px-2'>
//             <div className='flex items-stretch'>
//               <li className='btn btn-ghost rounded-btn'>
//                 <a href='/'>
//                   {t('translation:menu1')}
//                 </a>
//               </li>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu2')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li className='group'>
//                     <div
//                       className={`dropdown dropdown-right ${
//                         isSubMenuOpen ? 'open' : ''
//                       }`}
//                     >
//                       <a
//                         onClick={toggleSubMenu}
//                         className='group flex items-center cursor-pointer'
//                       >
//                         <span>Law</span>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                           className={`w-4 h-4 ml-2 ${
//                             isSubMenuOpen ? 'rotate-180' : ''
//                           }`}
//                         >
//                           <path
//                             strokeLinecap='round'
//                             strokeLinejoin='round'
//                             strokeWidth='2'
//                             d='M5 15l7-7 7 7'
//                           />
//                         </svg>
//                       </a>
//                       <ul
//                         tabIndex={0}
//                         className={`dropdown-content z-[1] menu p-2 w-52 ${
//                           isSubMenuOpen ? 'block' : 'hidden'
//                         }`}
//                       >
//                         <li>
//                           <a
//                             href='/law-on-state-governor-and-manage'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Law on State Governor and Manage
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href='/economic-law'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Economic Law
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href='/laws-on-culture-socials'
//                             className='menu p-2 shadow bg-base-100 rounded-box'
//                           >
//                             Law on Cultural-Social
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                   <li>
//                     <a href='/decree'>Decree</a>
//                   </li>
//                   <li>
//                     <a href='/ordinance'>Ordinance</a>
//                   </li>
//                   <li>
//                     <a href='/agreement'>Agreement</a>
//                   </li>
//                   <li>
//                     <a href='/instruction'>Instruction</a>
//                   </li>
//                   <li>
//                     <a href='/announcement-and-instruction'>
//                       Announcement and Instruction
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu3')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li>
//                     <a href='/finance-news'>Finance News</a>
//                   </li>
//                   <li>
//                     <a href='/television'>Television</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className='flex items-stretch'>
//                 <li className='btn btn-ghost rounded-btn'>
//                   <a href='/publication-and-statistics'>{t('translation:menu4')}</a>
//                 </li>
//               </div>
//               <div className='dropdown dropdown-hover'>
//                 <div
//                   tabIndex={0}
//                   role='button'
//                   className='btn btn-ghost rounded-btn'
//                 >
//                   {t('translation:menu5')}
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   id='dropdown-menu'
//                   className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
//                 >
//                   <li>
//                     <a href='/roles-and-responsibilities'>
//                       Roles and Responsibilities
//                     </a>
//                   </li>
//                   <li>
//                     <a href='/organization-and-structure'>
//                       Organisation and Structure
//                     </a>
//                   </li>
//                   <li>
//                     <a href='/contact'>Contact</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <LanguageToggle i18n={i18n} lngs={lngs} />
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default IndexNavbar2;