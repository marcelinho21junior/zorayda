import React from 'react'
import '../App.css'
import face from './img/facebook.png'
import insta from './img/insta.png'

export default function Navbar() {
  return (
    <div className="">
      <div className='itensNavbar'>
        <div>
          <p>ZORAYDA</p>
        </div>
        <div className='itensNavbarIcons'>
          <img src={face} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  )
}


