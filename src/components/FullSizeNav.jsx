
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/MOFlogo.png';
import '../components/Navbar.css';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const lngs = {
  en: { nativeName: 'English' },
  la: { nativeName: 'Lao' }
};

const FullSizeNav = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  const closeMenu = () => setClick(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
  };

  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='flex justify-end flex-1 px-2'>
            <div className='flex items-stretch'>
              <li className='btn btn-ghost rounded-btn'>
                <a href='/'>
                  {t('translation:menu1')}
                </a>
              </li>
              <div className='dropdown dropdown-hover'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost rounded-btn'
                >
                  {t('translation:menu2')}
                </div>
                <ul
                  tabIndex={0}
                  id='dropdown-menu'
                  className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black group-hover:block'
                >
                  <li className='group'>
                    <div
                      className={`dropdown dropdown-right ${
                        isSubMenuOpen ? 'open' : ''
                      }`}
                    >
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
                          >
                            Law on State Governor and Manage
                          </a>
                        </li>
                        <li>
                          <a
                            href='/economic-law'
                            className='menu p-2 shadow bg-base-100 rounded-box'
                          >
                            Economic Law
                          </a>
                        </li>
                        <li>
                          <a
                            href='/laws-on-culture-socials'
                            className='menu p-2 shadow bg-base-100 rounded-box'
                          >
                            Law on Cultural-Social
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href='/decree'>Decree</a>
                  </li>
                  <li>
                    <a href='/ordinance'>Ordinance</a>
                  </li>
                  <li>
                    <a href='/agreement'>Agreement</a>
                  </li>
                  <li>
                    <a href='/instruction'>Instruction</a>
                  </li>
                  <li>
                    <a href='/announcement-and-instruction'>
                      Announcement and Instruction
                    </a>
                  </li>
                </ul>
              </div>
              <div className='dropdown dropdown-hover'>
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
                    <a href='/finance-news'>Finance News</a>
                  </li>
                  <li>
                    <a href='/television'>Television</a>
                  </li>
                </ul>
              </div>
              <div className='flex items-stretch'>
                <li className='btn btn-ghost rounded-btn'>
                  <a href='/publication-and-statistics'>{t('translation:menu4')}</a>
                </li>
              </div>
              <div className='dropdown dropdown-hover'>
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
                    <a href='/roles-and-responsibilities'>
                      Roles and Responsibilities
                    </a>
                  </li>
                  <li>
                    <a href='/organization-and-structure'>
                      Organisation and Structure
                    </a>
                  </li>
                  <li>
                    <a href='/contact'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <LanguageToggle i18n={i18n} lngs={lngs} />
        </ul>
      </nav>
    </div>
  );
};

export default FullSizeNav;
