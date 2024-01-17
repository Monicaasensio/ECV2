import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_products';

export const ProductContext = createContext(null);

const defaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ProductContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultCart());

    const addToCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]:previous[itemId]+1}));
        console.log(cartItems);
    }

    const deleteFromCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]:previous[itemId]-1}));
    }

    const totalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
            return totalAmount;
        }
    }

    const contextValue = {all_product, cartItems, addToCart, deleteFromCart, totalAmount};

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;