import React from 'react'
import './sidebar.css';
import SocialCards from '../SocialCards';

const index = () => {
  return (
    <aside className='sidebar'>
      <div>
        <p className='yayin-akisi'>Follow Us</p>
        <div className="social-card">
          <SocialCards/>
        </div>
      </div>
    </aside>
  )
}

export default index