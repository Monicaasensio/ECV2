import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/small-logo-removebg-preview.png'
import cart from "../Assets/cart.png"

export default function Navbar() {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="MLA Crochet logo" />
            <p>MLA CROCHET</p>
        </div>
        <ul className="nav-menu">
        <li onClick={() => {setMenu("home")}}><Link style={{textDecoration: 'none'}} to = "/">HOME</Link>{menu === "home" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("about")}}><Link style={{textDecoration: 'none'}} to = "/about">ABOUT MLA</Link>{menu === "about" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration: 'none'}} to = "/contact">CONTACT US</Link>{menu === "contact" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("products")}}><Link style={{textDecoration: 'none'}} to = "/products">MLA SHOP</Link>{menu === "products" ? <hr/> : <></>}</li>
        <div className="nav-cart">
            {/* <Link to="/login"><button>LOGIN</button></Link> */}
            <Link to="/cart"><img src={cart} alt="Cart Icon" /></Link>
            <div className="nav-cart-counter">0</div>
        </div>
        </ul>
    </div>
  )
}
