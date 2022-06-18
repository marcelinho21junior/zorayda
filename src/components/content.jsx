import React from 'react'
import '../App.css'
import img1 from './img/img1.png'

export default function Content() {
  return (
    <div className="containerContent">
      <div className="containerContentIMG">
        <img src={img1} alt="" />
      </div>
      <div className="containerContentTEXT">
        <h1>Opening<br/> soon</h1>
        <div>
        <p>flahs prtod fmowfew flahs prtod fmowfew flahs prtod fmowfew flahs prtod fmowfew flahs prtod fmowfew flahs prtod fmowfew </p>
        </div>
        <div className="containerContentTEXTInputBtn">
            <input type="text" name="" id="" placeholder='Email Address'/>
            <button>Sign Up</button>
        </div>
        <div className="containerContentLocaContat">
            <div>
                <h1>Location</h1>
                <p>123 demo street</p>
                <p>New york, ny 12345</p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>email@email.com.br</p>
                <p>555 555 555</p>
            </div>
        </div>
      </div>
    </div>
  )
}


