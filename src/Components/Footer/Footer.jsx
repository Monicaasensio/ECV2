import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/long-logo-removebg-preview.png'
import instagram_icon from '../Assets/instagram-icon.webp'
import facebook_icon from '../Assets/facebook-icon.png'
import youtube_icon from '../Assets/youtube-icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="MLA logo" />
        
      </div>
      <ul className="footer-links">
        <li>Products</li>
        <li>Contact</li>
        <li>About</li>
        <li>Return Policy</li>
        <li>Size Chart</li>
      </ul>
      <div className="footer-socials">
        <div className="footer-icons">
            <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="footer-icons">
            <img src={facebook_icon} alt="facebook" />
        </div>
        <div className="footer-icons">
            <img src={youtube_icon} alt="youtube" />
        </div>
      </div>
      <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}
