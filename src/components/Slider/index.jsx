import React from 'react'
import './slider.css';
import {AiOutlineClockCircle} from 'react-icons/ai'

const index = () => {
  return (
    <section className='slider'>
      <article className='main-article article'>
        <header className='slider-article'>
          <h5>Haber</h5>
          <h2>Meta'nın Akıllı Gözlüğü Ray-Ban Stories'e Mesajlaşma Özelliği Geliyor: Hem de WhatsApp Üzerinden</h2>
          <ul className='slider-list'>
            <li>Author Name</li>
            <li><AiOutlineClockCircle/>1 hour ago</li>
          </ul>
        </header>
      </article>
      <article className='other-article article second-article'>
        <header className='slider-article'>
          <h5>Haber</h5>
          <h2>Evinize Süt Alırken İki Kez Düşüneceksiniz: İneklere Verilen İlaçlar İnsanlara Nasıl Zarar Veriyor?</h2>
          <ul className='slider-list'>
            <li>Author Name</li>
            <li><AiOutlineClockCircle/>1 hour ago</li>
          </ul>
        </header>
      </article>
      <div className='other-article'>
        <article className='article third-article'>
          <header className='slider-article'>
            <h5>Haber</h5>
            <h2>Böcekler Öldüklerinde Neden Ters Dönerler?</h2>
            <ul className='slider-list'>
              <li>Author Name</li>
              <li><AiOutlineClockCircle/>1 hour ago</li>
            </ul>
          </header>
        </article>
        <article className='article forth-article'>
          <header className='slider-article'>
            <h5>Haber</h5>
            <h2>Etrafa Mutlu Görünüp Aslında Dibi Yaşıyor Olmanızın Muhtemel Sebebi: Gizli Depresyon</h2>
            <ul className='slider-list'>
              <li>Author Name</li>
              <li><AiOutlineClockCircle/>1 hour ago</li>
            </ul>
          </header>
        </article>
      </div>
    </section>
  )
}

export default index