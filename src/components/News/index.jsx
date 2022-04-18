import React from 'react'
import './news.css';
import {MdPhoneIphone} from 'react-icons/md';
import News1 from '../../images/posts/news-1.jpg';

const index = () => {
  return (
    <div className='container'>
      <h3 className='yayin-akisi'>Latest News</h3>
      <div className="news-wrapper">
        <div className="news">
          <div className='news-left'>
            <MdPhoneIphone size={42} className="news-icon"/>
            <span>1 Hour Ago</span>
          </div>
          <img src={News1} alt="news image" className='news-img'/>
          <div className="news-content">
            <p className='news-tag'>NEWS TAG</p>
            <h2>iPhone 14 Tanıtıldıktan Sonra Hangi iPhone Modellerine Veda Edeceğiz?</h2>
            <p className='news-author'>Author Name</p>
          </div>
        </div>
        <div className="news">
          <div className='news-left'>
            <MdPhoneIphone size={42} className="news-icon"/>
            <span>1 Hour Ago</span>
          </div>
          <img src={News1} alt="news image" className='news-img'/>
          <div className="news-content">
            <p className='news-tag'>NEWS TAG</p>
            <h2>Tarih Boyunca Dünya Ekonomisini Şekillendiren Altın Fiyatları Aslında Neye Göre Belirleniyor?</h2>
            <p className='news-author'>Author Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index