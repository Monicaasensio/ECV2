import React from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom';

export default function NewArrivals() {
  return (
    <div className='new-arrivals-section'>
            <h1>New Arrivals</h1>
    <div className="new-arrivals">
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="../Assets/top4.jpeg" alt="new arrival" /><p>Kamille Granny Square Cardigan</p><div class="item-description">All sizes available. Made to order. Made with 100% Acrylic yarn.</div><div class="item-price">39.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="../Assets/blanket2.jpeg" alt="new arrival" /><p>Gris Granny Square Blanket</p><div class="item-description">100% Acrylic yarn. Customize colors and sizes available by request.</div><div class="item-price">59.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="../Assets/bag1.jpeg" alt="new arrival" /><p>Cesped Mesh Bag</p><div class="item-description">100% Acrylic yarn. Customize colors available by request.</div><div class="item-price">24.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="../Assets/top3.jpeg" alt="new arrival" /><p>Aurora Ruffled Top</p><div class="item-description">All sizes available. Made to order. Made with 100% Cotton yarn.</div><div class="item-price">29.99<div class="add-to-cart"></div></div></Link></div>
    </div>
    </div>
  )
}
