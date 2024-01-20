import React, { useContext } from 'react'
import './CartItems.css'
import InitialCartContext from '../../Context/CartContext'

export default function CartItems({name, quantity, price}) {

    const cartCtx = useContext(InitialCartContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

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
      <div>
      {cartCtx.items.map((item) => (
            <div className="cart-items-format cart-format" key={item.id}>
                <img className="cart-item-icon" src={item.image} alt="cart item" />
                <p>{item.name}</p>
                <p>${item.price}</p>
            <button className='cart-items-quantity'>{item.quantity}</button>
            <p>{item.price*item.quantity}</p>
            <button className="cart-items-remove" onClick={() => {cartCtx.removeItem(item.id)}}>X</button>
          </div>
        ))}
        <hr/>
        </div>
    <div className="cart-summary">
        <div className="cart-total">
            <h1>Total</h1>
            <p>${cartTotal}</p>
        </div>
        <hr />
        <button>Proceed To Checkout</button>
    </div>
    </div>
  )
}
