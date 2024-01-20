import React, { useContext, useEffect, useState } from 'react'
import './CSS/Products.css'
import Newsletter from '../Components/Newsletter/Newsletter'
import banner from '../Components/Assets/header-logo3.png'
import InitialCartContext from '../Context/CartContext.jsx'

const ProductPage = () => {

  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
      
      const filteredAndSortedData = data
        .filter((item) => (filterCategory ? item.category === filterCategory : true))

        .sort((a, b) => {
          if (sortOption === 'low-to-high') {
            return a.price - b.price;
          } else if (sortOption === 'high-to-low') {
            return b.price -  a.price;
          }
          return 0;
        });
        setData(data);
        setFilteredAndSortedData(filteredAndSortedData);
      } catch (err) {
        console.log("Error fetching data:", err);
    }
})();
  }, [sortOption, filterCategory]);



  const cartCtx = useContext(InitialCartContext);

  function handleAddProductToCart(product) {
    cartCtx.addItem(product);
  }

  return (
    <div className='product-page'>
      <div className="product-banner-section">
        <img className='product-banner' src={banner} alt="crochet banner" />
      </div>
      <div className="sort-section">
          <p>Showing {filteredAndSortedData.length} of {data.length} products</p>
        <div className="sort-buttons">
        <button onClick={() => setFilterCategory('clothing')}>Clothing</button>
    <button onClick={() => setFilterCategory('home')}>Home</button>
    <button onClick={() => setFilterCategory('accessories')}>Accessories</button>
    <button onClick={() => setFilterCategory('')}>All Products</button>
        </div>
        <select name='sort' className="product-sort" onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By:</option>
          <option value="low-to-high">Price Low To High</option>
          <option value="high-to-low">Price High To Low</option>
        </select>
      </div>
      <div className="products">
      {filteredAndSortedData.map((d) => (
      <div className='item' key={d.id}>
        <img src={d.image} alt="product" />
        <p>{d.name}</p>
      <div className="item-description">{d.description}</div>
      <div className="item-price">{d.price}
      <div className="add-to-cart">
        <button onClick={()=> {handleAddProductToCart(d)}}>Add to cart</button>
      </div>
      </div> 
      </div>
           ))}
                 </div>
      <Newsletter />
    </div>
  )
}

export default ProductPage;