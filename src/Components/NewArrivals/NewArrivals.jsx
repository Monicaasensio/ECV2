import React from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom';

export default function NewArrivals() {
  return (
    <div className='new-arrivals-section'>
            <h1>New Arrivals</h1>
    <div className="new-arrivals">
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="/static/media/top4.b184df82938c0debfec4.jpeg" alt="" /><p>Kamille Granny Square Cardigan</p><div class="item-description">All sizes available. Made to order. Made with 100% Acrylic yarn.</div><div class="item-price">39.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="/static/media/blanket2.c8ea88c991b002d7e088.jpeg" alt="" /><p>Gris Granny Square Blanket</p><div class="item-description">100% Acrylic yarn. Customize colors and sizes available by request.</div><div class="item-price">59.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="/static/media/bag1.be91c176a19eb64cbe74.jpeg" alt="" /><p>Cesped Mesh Bag</p><div class="item-description">100% Acrylic yarn. Customize colors available by request.</div><div class="item-price">24.99<div class="add-to-cart"></div></div></Link></div>
      <div class="item"><Link style={{textDecoration: 'none'}} to = "/products"><img src="/static/media/top3.8c65d3f69da63013c58d.jpeg" alt="" /><p>Aurora Ruffled Top</p><div class="item-description">All sizes available. Made to order. Made with 100% Cotton yarn.</div><div class="item-price">29.99<div class="add-to-cart"></div></div></Link></div>
    </div>
    </div>
  )
}
