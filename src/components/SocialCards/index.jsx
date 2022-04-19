import React from 'react'
import './socialcards.css'
import {AiFillFacebook} from 'react-icons/ai';

const index = () => {
  return (
    <div>
        <div className="single-card">
            <div className="card-header">
                <AiFillFacebook className='social-icon-facebook'/>
            </div>
            <div className="card-content">
                <div className='social-counter'>574B</div>
                <div className='social-cta'>Beğeni</div>
            </div>
        </div>
    </div>
  )
}

export default index