import React, {createContext, useState, useEffect, useLocalStorage} from "react";

export const cartContext =  createContext({}); // contexto creado

export const CartContextProvider = ({children}) => {
    const [storedValue, setLocalStorage] = useLocalStorage("cart", []); //Asi funciona el localStorage en React?
    const [cartItems, setCartItems] = useState(storedValue);
    const [total, setTotal] = useState(0);

    useEffect(() => setLocalStorage(cartItems), [cartItems])

    const addItemToCart = (items) => {
        const newItems = [ ...cartItems ]; //creando array
        const newItems2 = [ ...newItems, ...items ];
        setCartItems(newItems2) 
    }

    const removeItems = (item) => {
        const newItems = cartItems.filter ( (cartItem) => cartItem.id !== item.id)
        setCartItems(newItems)
    }

    const removeItem = (item) => {
        const filterProduct = cartItems.filter((cartItem) => cartItem.id === item.id)
        filterProduct.pop()
        const products = cartItems.filter((cartItem) => cartItem.id !== item.id)
        const newProducts = [ ...products, ...filterProduct ]
        setCartItems(newProducts)
    }

    console.log(cartItems);

    return (
        <cartContext.Provider 
            value={{
                cartItems,
                addItemToCart,
                removeItems,
                removeItem
            }}
        >
            {children}
        </cartContext.Provider>
    )
}
