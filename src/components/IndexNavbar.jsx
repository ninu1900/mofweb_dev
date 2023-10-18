import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/mof-logo.png'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';


import IconButton from './IconButton'
// import { Facebook } from 'react-feather'
// import { FiUser } from "react-icons/fi";

import { useTranslation } from 'react-i18next';


import '../components/Navbar.css'

const locales = {
  en: { title: 'English' },
  la: { title: 'Lao' },
};

const IndexNavbar = () => {

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    //for dropdown menu


    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)

    //close menu on click
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>{t('main.menu1')}</a>
                    </li>

                    {/* <li className='nav-item relative group'>
                      <a href='#about'>Laws & Legislation</a>
                      <div className='absolute hidden bg-black py-2 mt-2 space-y-2 group-hover:block w-auto p-2 rounded-lg z-10'>
                        <a href='#submenu-item-1' className="text-white hover:text-blue-500">Law</a>
                        <a href='#submenu-item-2' className="text-white hover:text-blue-500">Decree</a>
                        <a href='#submenu-item-3' className="text-white hover:text-blue-500">Ordinance</a>
                        <a href='#submenu-item-4' className="text-white hover:text-blue-500">Agreement</a>
                        <a href='#submenu-item-5' className="text-white hover:text-blue-500">Instruction</a>
                        <a href='#submenu-item-6' className="text-white hover:text-blue-500">Announcement and Instruction</a>
                      </div>
                    </li> */}


                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>{t('main.menu2')}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>{t('main.menu3')}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>{t('main.menu4')}</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>{t('main.menu5')}</a>
                    </li>
                    

                    {Object.keys(locales).map((locale) => (
                    <li key={locale}>
                      <button 
                      style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} 
                      type="submit" 
                      onClick={() => i18n.changeLanguage(locale)}
                      >
                        {locales[locale].title}
                      </button>
                    </li>
                    ))}
                </ul>             
            </nav>
        </div>
    )
}

export default IndexNavbar; 




                {/* <li>
                      <IconButton text="Facebook" color="bg-blue-500">
                        <Facebook size={20} />
                      </IconButton>
                    </li>
                    <li>
                      <IconButton text="Login" color="bg-blue-500">
                        <FiUser size={20} />
                        <a href='http://localhost:1337/' onClick={handleClick}></a>
                      </IconButton>
                    </li> */}

                    {/* <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <PublicOutlinedIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>English</MenuItem>
                        <MenuItem onClick={handleClose}>ພາ​ສາ​ລາວ</MenuItem>
                      </Menu>
                    </div> */}