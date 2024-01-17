import React from 'react';
import './Hero.css';
import hero_img from '../Assets/hero-removebg-preview.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>MLA CROCHET</h2>
        <div>
            <div className="hero-icon">
                <p>Crafted</p>
                <p>With Love</p>
            </div>
        </div>
        <div className="hero-btn">
            <div>SHOP</div>
            <img src="" alt="" />
        </div>
      </div>
      <div className="hero-right">
    <img src={hero_img} alt="Isla Dress" />
      </div>


    </div>
  )
}
