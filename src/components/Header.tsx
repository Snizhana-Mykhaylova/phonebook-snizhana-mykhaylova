import { useState, useEffect } from 'react';

import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Phonebook from '../utils/phonebook.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 480);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <header className='header'>
      <img className='logo' src={Phonebook} alt='phonebook-logo' />
      {isMobile ? <MobileMenu /> : <Menu />}
    </header>
  );
};

export default Header;
