import React, { useContext } from 'react'
import './CSS/Products.css'
import Item from '../Components/Item/Item'
import { ProductContext } from '../Context/ProductContext'
import dropdown_icon from '../Components/Assets/dropdown.png'
import { useParams } from 'react-router-dom'
import Newsletter from '../Components/Newsletter/Newsletter'

const ProductPage = (props) => {

  const {all_product} = useContext(ProductContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div className='product-page'>
      <div className="product-banner-section">
        <img className='product-banner' src={props.banner} alt="crochet banner" />
      </div>
      <div className="sort-section">
        <p>Showing 18 of 18 products</p>
      <div className="product-sort">
        Sort by <img src={dropdown_icon} alt="dropdown icon" />
      </div>
      </div>
      <div className="products">
        {all_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price}/>
        })}
      </div>
      <Newsletter />
    </div>
  )
}

export default ProductPage;