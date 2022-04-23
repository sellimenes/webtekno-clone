import React from 'react'
import './news.css';

import {MdPhoneIphone} from 'react-icons/md';
import {FaRegNewspaper} from 'react-icons/fa';
import {BsApple} from 'react-icons/bs';


import News1 from '../../images/posts/news-1.jpg';
import News2 from '../../images/posts/news-2.webp';
import News3 from '../../images/posts/news-3.webp';


const index = () => {
  return (
    <div className=''>
      <div className="news-wrapper">
        <h3 className='yayin-akisi'>Latest News</h3>
        <div className="news">
          <div className='news-left'>
            <MdPhoneIphone size={42} className="news-icon"/>
            <span>48 Mins Ago</span>
          </div>
          <img src={News2} alt="news image" className='news-img'/>
          <div className="news-content">
            <p className='news-tag'>NEWS TAG</p>
            <h2>iPhone 14 Tanıtıldıktan Sonra Hangi iPhone Modellerine Veda Edeceğiz?</h2>
            <p className='news-author'>Author Name</p>
          </div>
        </div>
        <div className="news">
          <div className='news-left'>
            <FaRegNewspaper size={42} className="news-icon"/>
            <span>1 Hour Ago</span>
          </div>
          <img src={News1} alt="news image" className='news-img'/>
          <div className="news-content">
            <p className='news-tag'>NEWS TAG</p>
            <h2>Tarih Boyunca Dünya Ekonomisini Şekillendiren Altın Fiyatları Aslında Neye Göre Belirleniyor?</h2>
            <p className='news-author'>Author Name</p>
          </div>
        </div>
        <div className="news">
          <div className='news-left'>
            <BsApple size={42} className="news-icon"/>
            <span>3 Hour Ago</span>
          </div>
          <img src={News3} alt="news image" className='news-img'/>
          <div className="news-content">
            <p className='news-tag'>NEWS TAG</p>
            <h2>‘En Ucuz MacBook’ Olacak MacBook Air 2022'nin Tasarımı Ortaya Çıktı</h2>
            <p className='news-author'>Author Name</p>
          </div>
        </div>
      </div>
      <div className="sidebar">
      </div>
    </div>
  )
}

export default index