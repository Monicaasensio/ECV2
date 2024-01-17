import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Keep up with us!</h1>
      <p>Subscribe to our newsletter for exclusive offers</p>
      <div>
        <input type="email" placeholder='Your Email Here' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
