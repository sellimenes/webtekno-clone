import React from 'react'
import './socialcards.css'
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

const index = () => {
  return (
    <div className='cards'>
        <div className="single-card">
            <div className="card-header card-facebook">
                <AiFillFacebook className='social-icon'/>
            </div>
            <div className="card-content">
                <div className='social-counter'>574B</div>
                <div className='social-cta'>Beğeni</div>
            </div>
        </div>
        <div className="single-card">
            <div className="card-header card-twitter">
                <AiFillTwitterSquare className='social-icon'/>
            </div>
            <div className="card-content">
                <div className='social-counter'>370B</div>
                <div className='social-cta'>Takipçi</div>
            </div>
        </div>
        <div className="single-card">
            <div className="card-header card-instagram">
                <AiFillInstagram className='social-icon'/>
            </div>
            <div className="card-content">
                <div className='social-counter'>1.7M</div>
                <div className='social-cta'>Takipçi</div>
            </div>
        </div>
        <div className="single-card">
            <div className="card-header card-youtube">
                <AiFillYoutube className='social-icon'/>
            </div>
            <div className="card-content">
                <div className='social-counter'>3.18M</div>
                <div className='social-cta'>Abone</div>
            </div>
        </div>
    </div>
  )
}

export default index