import React from 'react'
import '../App.css'
import face from './img/facebook.png'
import insta from './img/insta.png'

import { BsFillEmojiHeartEyesFill, BsFillBugFill } from "react-icons/bs";

export default function Navbar() {
  return (
      <div className='itensNavbar'>
        <div>
          <p>ZORAYDA</p>
        </div>
        <div className='itensNavbarIcons'>
          <BsFillBugFill />
          <BsFillEmojiHeartEyesFill />
        </div>
      </div>
  )
}


