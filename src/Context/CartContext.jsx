import { createContext, useReducer } from "react";
import cartPage from "../Pages/cart";

const InitialCartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});


function cartReducer(state, action) {
    console.log(state.items);
    console.log(action.item);
    if (action.type === 'Add_Item') {
        const existingCartItemIndex = state.items.findIndex(
            (item)  => item.id === action.item.id
        );
        
console.log("message:", existingCartItemIndex);
        const updatedItems = [...state.items];

        if (existingCartItemIndex  > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

    if (action.type === 'Remove_Item') {
        const existingCartItemIndex = state.items.findIndex(
            (item)  => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        
        return  {...state, items: updatedItems};
    }

    return state;
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addItem(item) {
        dispatchCartAction({type: 'Add_Item', item});
    }

    function removeItem(id) {
        dispatchCartAction({type: 'Remove_Item', id});
    }

    const CartContextValue = {
        items: cart.items,
        addItem,
        removeItem
    };


    console.log(CartContextValue);

    return ( 
    <InitialCartContext.Provider value={CartContextValue}>{children}</InitialCartContext.Provider>
    );
}

export default InitialCartContext;