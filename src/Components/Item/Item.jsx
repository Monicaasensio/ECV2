import React, { useContext } from 'react'
import './Item.css'
import { ProductContext } from '../../Context/ProductContext';

export default function Item(props) {

  const {product} = props;
  const {addToCart} = useContext(ProductContext);


  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-description">
      {props.description}
      </div>
      <div className="item-price">
        {props.price}
        <div className="add-to-cart">
        <button onClick={()=> {addToCart(props.id-1)}}>Add to cart</button>
      </div>
      </div>
    </div>
  )
}
