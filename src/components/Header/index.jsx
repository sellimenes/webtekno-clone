import React from 'react'
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi';

const index = () => {
  return (
    <div className='header'>
      <div>
        <GiHamburgerMenu className='hamburger-menu-icon' size={20}/>
      </div>
    </div>
  )
}

export default index