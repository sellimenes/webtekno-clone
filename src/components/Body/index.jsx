import React from 'react'
import './body.css';
import News from '../News'
import Sidebar from '../Sidebar'

const index = () => {
  return (
    <section className='container'>
        <News/>
        <Sidebar/>
    </section>
  )
}

export default index