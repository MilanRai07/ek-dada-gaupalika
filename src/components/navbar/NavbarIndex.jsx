import { useState, useRef, useEffect } from 'react';
import { ReactComponent as Down } from '../../assets/svg/CDown.svg';
import { motion,AnimatePresence } from "framer-motion";
import { ReactComponent as Ham } from '../../assets/svg/hamburger.svg'
import HamDrop from './HamDrop';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/image/logo.webp';

const NavbarIndex = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [active, setActive] = useState('Home'); 
  const dropdownRef = useRef(null);
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 747)
     const [showHam, setShowHam] = useState(false)

 useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 747)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowIntro(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

   const slidingAnimation = (
    <motion.div
      layoutId="underline"
      className="absolute -bottom-2 left-0 h-[2.5px] w-full bg-MainRed z-10" // Changed to `bottom-0` and added `z-10`
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );

  return (
    <>
    {
      isDesktop && (
        <nav className="h-[70px] flex items-center justify-between px-[75px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <div className="text-MainRed">LOGO</div>
      <ul className="flex justify-between gap-8 font-semibold text-sm max-md:gap-4 max-md:text-[13px]">
        <li 
          className="cursor-pointer relative" 
          onClick={() => setActive('Home')} // Update active state
        >
          Home
          {active === 'Home' && slidingAnimation}
        </li>
        
        <li
          className="flex gap-2.5 items-center cursor-pointer relative"
          onClick={() => {
            setShowIntro(!showIntro);
            setActive('Introduction'); // Update active state
          }}
          ref={dropdownRef}
        >
          <p>Introduction</p>
          <Down className={`transition-transform duration-200 ${showIntro ? 'rotate-180' : ''}`} />
          {/* Dropdown with Animation */}
          <div
            className={`absolute top-full -left-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${
              showIntro ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <ul>
              <li className="px-4 py-3 hover:bg-gray-100 text-[13px]">Our Mission and Vision</li>
              <li className='h-0.5 bg-DarkGreen w-full'></li>
              <li className="px-4 py-3 hover:bg-gray-100 text-[13px]">Elected Officials</li>
            </ul>
          </div>
        </li>

        <li 
          className="cursor-pointer relative"
          onClick={() => setActive('Digital Profile')} // Update active state
        >
          Digital Profile
          {active === 'Digital Profile' && slidingAnimation}
        </li>

        <li 
          className="cursor-pointer relative"
          onClick={() => setActive('Gallery')} // Update active state
        >
          Gallery
          {active === 'Gallery' && slidingAnimation}
        </li>

        <li 
          className="cursor-pointer relative"
          onClick={() => setActive('Contact')} // Update active state
        >
          Contact
          {active === 'Contact' && slidingAnimation}
        </li>
      </ul>
    </nav>
      )
    }
     {!isDesktop && (
        <nav className='px-10 w-full bg-white relative'>
          <div className='flex items-center w-full justify-between py-4 '>
            <Ham
              className='w-[30px] h-[30px] cursor-pointer'
              onClick={() => setShowHam(!showHam)}
            />
            <NavLink to='/' className='h-[60px] w-auto flex items-center'>
              <img
                src={Logo}
                className='w-full h-full '
                alt='Logo'
              />
            </NavLink>
          </div>

          <AnimatePresence>
            {showHam && (
              <motion.div
                className='absolute inset-0 w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <HamDrop setShowHam={setShowHam} />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
    </>
  );
};

export default NavbarIndex;