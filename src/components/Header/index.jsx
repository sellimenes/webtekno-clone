import React from 'react'
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import WebteknoLogo from '../../images/webtekno-logo-white.png';
import {GoTriangleDown, GoSearch} from 'react-icons/go';
import {FaUser} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';


const index = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <GiHamburgerMenu className='hamburger-menu-icon' size={32}/>
        <img src={WebteknoLogo} alt="logo" className='wb-logo'/>
        <ul>
          <li>Anasayfa</li>
          <li>Haber</li>
          <li>Video</li>
          <li>Kategoriler <GoTriangleDown/></li>
        </ul>
      </div>
      <div className="header-right">
        <GoSearch size={28} className='search-icon'/>
        <p className='header-login'><FaUser className='user-icon' size={28}/> <span>Giriş Yap</span></p>
        <MdFavorite size={28} className='favs-icon'/>
      </div>
    </div>
  )
}

export default index