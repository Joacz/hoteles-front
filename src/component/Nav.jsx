import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import '../style/Nav.css';
import { MenuIcon } from '@heroicons/react/outline';
export const Nav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className={`navBar`}>
      <MenuIcon
        width={30}
        className='responsiveIcon'
        onClick={() => toggleNav()}
      />
      <div className={`interior active ${nav ? 'show' : 'hidden'}`}>
        <div className={`navItem brandContainer ${nav ? 'show' : 'hidden'}`}>
          <span className='display navBrand'>Hoteles.com</span>
        </div>

        <ul className={`navItem navList ${nav ? 'show' : 'hidden'}`}>
          <li className='listItem'>
            <a href='/' className='navLink'>
              Principal
            </a>
          </li>
          <li className='listItem'>
            <a href='/hoteles' className='navLink'>
              Hoteles
            </a>
          </li>
          <li className='listItem'>
            <a href='/sobre-nosotros' className='navLink'>
              Sobre Nosotros
            </a>
          </li>
          <li className='listItem'>
            <a href='/soporte' className='navLink'>
              Soporte
            </a>
          </li>
          <li className='listItem search'>
            <form className='searchContainer' action='/search'>
              <input type='text' />
              <button type='submit'>
                <SearchIcon width='20' />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};
