// SmallSizeNav.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import MobileMenu from './MobileMenu';
import logo from './images/MOFlogo.png';

const SmallSizeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`relative ${isMenuOpen ? 'overflow-hidden max-h-screen' : ''}`}>
      {/* Navbar content */}
      <nav className="fixed top-0 right-0 z-30 w-full bg-transparent text-right p-4">
        {/* Hamburger menu button */}
        <button onClick={() => setIsMenuOpen(true)} className="text-4xl text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Content pushed to the side when menu is open */}
      <div className={`flex flex-col min-h-screen transform transition-transform ${isMenuOpen ? 'translate-x-1/4' : 'translate-x-0'}`}>
        {/* Replace with your actual main content */}
        <div className="z-10 bg-white p-4">
          <img src={logo} alt="Logo" className="w-32" />
          {/* Other content */}
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </div>
  );
};

export default SmallSizeNav;



// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import MobileMenu from './MobileMenu';
// import logo from './images/MOFlogo.png';

// const SmallSizeNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className={`relative ${isMenuOpen ? 'overflow-hidden max-h-screen' : ''}`}>
//       <nav className="fixed top-0 right-0 z-20">
//         <a href='/' className='logo'>
//           <img src={logo} alt='logo' />
//         </a>
//         <div className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <FaTimes size={30} style={{ color: '#ffffff' }} /> : <FaBars size={30} style={{ color: '#ffffff' }} />}
//         </div>
//       </nav>
//       {isMenuOpen && <MobileMenu isOpen={isMenuOpen}/>}
//     </div>
//   );
// };

// export default SmallSizeNav;


// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from './images/MOFlogo.png';
// import MobileMenu from './MobileMenu';

// const SmallSizeNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className='header'>
//       <nav className='navbar'>
//         <a href='/' className='logo'>
//           <img src={logo} alt='logo' />
//         </a>
//         <div className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             <FaTimes size={30} style={{ color: '#ffffff' }} />
//           ) : (
//             <FaBars size={30} style={{ color: '#ffffff' }} />
//           )}
//         </div>
//       </nav>
//       {isMenuOpen && <MobileMenu />}
//     </div>
//   );
// };

// export default SmallSizeNav;
