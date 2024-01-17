import React, { useContext } from 'react'
import './CartItems.css'
import { ProductContext } from '../../Context/ProductContext'

export default function CartItems(props) {

    const {all_product, cartItems, deleteFromCart, totalAmount} = useContext(ProductContext);

  return (
    <div className='cart-items'>
      <div className="cart-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=> {
        if(cartItems[e.id]>0) {
            return <div>
            <div className="cart-items-format cart-format">
                <img className="cart-item-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.price}</p>
            <button className='cart-items-quantity'>{cartItems[e.id]}</button>
            <p>{e.price*cartItems[e.id]}</p>
            <button className="cart-items-remove" onClick={() => {deleteFromCart(props.id-1)}}>X</button>
          </div>
          <hr/>
        </div>
        } 
      })}
    <div className="cart-summary">
        <div className="cart-total">
            <h1>Total</h1>
            <p>${totalAmount()}</p>
        </div>
        <hr />
        <button>Proceed To Checkout</button>
    </div>
    </div>
  )
}
