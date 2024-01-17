import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import './Slider.css'

const slideImages = [
    {url: 'https://images.unsplash.com/photo-1470049384172-927891aad5e9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyb2NoZXR8ZW58MHx8MHx8fDA%3D',
    caption: 'SMALL BUSINESS'},
    {url: 'https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1592294209838-T9AY0GXLUQLJBP66QZIQ/image-asset.jpeg',
    caption: 'LATINA OWNED'},
    {url: 'https://img.freepik.com/premium-photo/crocheted-amigurumi-pink-heart-with-crochet-hook-yarn-wooden-background-valentine-s-day-banner_644346-2808.jpg',
    caption: 'HANDMADE WITH LOVE'},
    {url: 'https://img.freepik.com/free-photo/front-view-yarn-basket-with-copy-space_23-2148791021.jpg',
    caption: 'NEW CROCHET STYLES'}
];

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    width: '80%',
    margin: '50px auto',
    backgroundSize: 'cover'
}

const spanStyle = {
    fontSize: '40px',
    background: '#efefef',
    color: '#000',
    padding: '10px'
}

export default function Slider() {

  return (
    <div className='slider-section'>
        <Fade autoplay={true} duration={3000} indicators={true}>
            {slideImages.map((image, index) => (
                <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                    <span style={{...spanStyle}}>{image.caption}</span>
                </div>
            ))}
        </Fade>
    </div>
  )
}
