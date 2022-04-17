import React from 'react'
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import WebteknoLogo from '../../images/webtekno-logo-white.png';
import {GoTriangleDown} from 'react-icons/go'

const index = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <GiHamburgerMenu className='hamburger-menu-icon' size={20}/>
        <img src={WebteknoLogo} alt="logo" className='wb-logo'/>
        <ul>
          <li>Anasayfa</li>
          <li>Haber</li>
          <li>Video</li>
          <li>Kategoriler <GoTriangleDown/></li>
        </ul>
      </div>
    </div>
  )
}

export default index