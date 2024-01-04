import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <>
    <section className='intro'>
      <div className='intro__text'>
        <h1 className='intro__heading'>Learn to code by watching others</h1>
        <p className='intro__description'>See how experienced developers solve problems in real-time. 
              Watching scripted tutorials is great, but understanding how 
              developers think is invaluable.
        </p>
      </div>
      <div className='intro__form'>
        <p className='intro__proposition'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        <div className='intro__input'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Password'/>
          <button>CLAIM YOUR FREE TRIAL</button>
          <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
