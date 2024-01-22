import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import '../components/MobileMenu.css';

const lngs = {
  en: { nativeName: 'English' },
  la: { nativeName: 'Lao' }
};

const MobileMenu = ({ isOpen }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const [subMenuOpen, setSubMenuOpen] = useState({
    menu2: false,
    law: false,
    menu3: false,
    menu5: false
  });

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu container */}
      <div className={`fixed top-0 right-0 h-full bg-white z-20 w-3/4 p-4 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button onClick={closeMenu} className="text-left">
          CLOSE MENU
        </button>

        <ul className="menu space-y-2">
        <ul className="menu rounded-box">
        <li><a href='/'>{t('translation:menu1')}</a></li>
        <li>
          <details open={subMenuOpen.menu2} onClick={() => toggleSubMenu('menu2')}>
            <summary>{t('translation:menu2')}</summary>
            <ul>
              <li>
                <details open={subMenuOpen.law} onClick={() => toggleSubMenu('law')}>
                  <summary>Law</summary>
                  <ul>
                    <li><a href='/law-on-state-governor-and-manage'>Law on State Governor and Manage</a></li>
                    <li><a href='/economic-law'>Economic Law</a></li>
                    <li><a href='/laws-on-culture-socials'>Law on Cultural-Social</a></li>
                  </ul>
                </details>
              </li>
              <li><a href='/decree'>Decree</a></li>
              <li><a href='/ordinance'>Ordinance</a></li>
              <li><a href='/agreement'>Agreement</a></li>
              <li><a href='/instruction'>Instruction</a></li>
              <li><a href='/announcement-and-instruction'>Announcement and Instruction</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details open={subMenuOpen.menu3} onClick={() => toggleSubMenu('menu3')}>
            <summary>{t('translation:menu3')}</summary>
            <ul>
              <li><a href='/finance-news'>Finance News</a></li>
              <li><a href='/television'>Television</a></li>
            </ul>
          </details>
        </li>
        <li><a href='/publication-and-statistics'>{t('translation:menu4')}</a></li>
        <li>
          <details open={subMenuOpen.menu5} onClick={() => toggleSubMenu('menu5')}>
            <summary>{t('translation:menu5')}</summary>
            <ul>
              <li><a href='/roles-and-responsibilities'>Roles and Responsibilities</a></li>
              <li><a href='/organization-and-structure'>Organisation and Structure</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </details>
        </li>
      </ul>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;

// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import LanguageToggle from './LanguageToggle';
// import '../components/MobileMenu.css';

// const lngs = {
//   en: { nativeName: 'English' },
//   la: { nativeName: 'Lao' }
// };

// const MobileMenu = ({ isOpen }) => {
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const lng = navigator.language;
//     i18n.changeLanguage(lng);
//   }, []);

//   const [subMenuOpen, setSubMenuOpen] = useState({
//     menu2: false,
//     law: false,
//     menu3: false,
//     menu5: false
//   });

//   const toggleSubMenu = (menu) => {
//     setSubMenuOpen(prevState => ({
//       ...prevState,
//       [menu]: !prevState[menu]
//     }));
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`fixed top-0 ${isOpen ? 'right-0' : '-right-full'} h-full bg-white z-20 w-3/4 transition-all duration-300 ease-in-out`}>
      // <ul className="menu rounded-box">
      //   <li><a href='/'>{t('translation:menu1')}</a></li>
      //   <li>
      //     <details open={subMenuOpen.menu2} onClick={() => toggleSubMenu('menu2')}>
      //       <summary>{t('translation:menu2')}</summary>
      //       <ul>
      //         <li>
      //           <details open={subMenuOpen.law} onClick={() => toggleSubMenu('law')}>
      //             <summary>Law</summary>
      //             <ul>
      //               <li><a href='/law-on-state-governor-and-manage'>Law on State Governor and Manage</a></li>
      //               <li><a href='/economic-law'>Economic Law</a></li>
      //               <li><a href='/laws-on-culture-socials'>Law on Cultural-Social</a></li>
      //             </ul>
      //           </details>
      //         </li>
      //         <li><a href='/decree'>Decree</a></li>
      //         <li><a href='/ordinance'>Ordinance</a></li>
      //         <li><a href='/agreement'>Agreement</a></li>
      //         <li><a href='/instruction'>Instruction</a></li>
      //         <li><a href='/announcement-and-instruction'>Announcement and Instruction</a></li>
      //       </ul>
      //     </details>
      //   </li>
      //   <li>
      //     <details open={subMenuOpen.menu3} onClick={() => toggleSubMenu('menu3')}>
      //       <summary>{t('translation:menu3')}</summary>
      //       <ul>
      //         <li><a href='/finance-news'>Finance News</a></li>
      //         <li><a href='/television'>Television</a></li>
      //       </ul>
      //     </details>
      //   </li>
      //   <li><a href='/publication-and-statistics'>{t('translation:menu4')}</a></li>
      //   <li>
      //     <details open={subMenuOpen.menu5} onClick={() => toggleSubMenu('menu5')}>
      //       <summary>{t('translation:menu5')}</summary>
      //       <ul>
      //         <li><a href='/roles-and-responsibilities'>Roles and Responsibilities</a></li>
      //         <li><a href='/organization-and-structure'>Organisation and Structure</a></li>
      //         <li><a href='/contact'>Contact</a></li>
      //       </ul>
      //     </details>
      //   </li>
      // </ul>
//     </div>
//   );
// };

// export default MobileMenu;



// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import LanguageToggle from './LanguageToggle';
// import '../components/MobileMenu.css';


// const lngs = {
//   en: { nativeName: 'English' },
//   la: { nativeName: 'Lao' }
// };

// const MobileMenu = () => {

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

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener('scroll', changeColor);

//   const closeMenu = () => setClick(false);

//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const toggleSubMenu = (e) => {
//     e.preventDefault();
//     setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
//   };

//   return (
//     <div className='mobile-menu-container'>
//     <ul className="menu bg-base-200 w-56 rounded-box">
//   <li><a href='/'>{t('translation:menu1')}</a></li>
//   <li>
//     <details close>
//       <summary>{t('translation:menu2')}</summary>
//       <ul>
//       <li>
//           <details close>
//             <summary>Law</summary>
//             <ul>
//               <li><a href='/law-on-state-governor-and-manage'>Law on State Governor and Manage</a></li>
//               <li><a href='/economic-law'>Economic Law</a></li>
//               <li><a href='/laws-on-culture-socials'>Law on Cultural-Social</a></li>
//             </ul>
//           </details>
//         </li>
//         <li><a href='/decree'>Decree</a></li>
//         <li><a href='/ordinance'>Ordinance</a></li>
//         <li><a href='/agreement'>Agreement</a></li>
//         <li><a href='/instruction'>Instruction</a></li>
//         <li><a href='/announcement-and-instruction'>Announcement and Instruction</a></li>
        
//       </ul>
//     </details>
//   </li>
//         <li>
//           <details close>
//             <summary>{t('translation:menu3')}</summary>
//             <ul>
//               <li><a href='/finance-news'>Finance News</a></li>
//               <li><a href='/television'>Television</a></li>
//             </ul>
//           </details>
//         </li>
//   <li><a href='/publication-and-statistics'>{t('translation:menu4')}</a></li>
//   <li>
//           <details close>
//             <summary>{t('translation:menu5')}</summary>
//             <ul>
//             <li><a href='/roles-and-responsibilities'>Roles and Responsibilities</a></li>
//             <li><a href='/organization-and-structure'>Organisation and Structure</a></li>
//             <li><a href='/contact'>Contact</a></li>
//             </ul>
//           </details>
//         </li>
        
// </ul>
// </div>
//   );

// };

// export default MobileMenu;