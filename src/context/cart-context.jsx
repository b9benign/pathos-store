import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    addItemToCart: () => { }
});


const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCartVisibility = () => setIsCartOpen(!isCartOpen);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (itemToAdd, itemSize) => {
        const itemFinder = cartItems.find((cartItem) => (cartItem.id === itemToAdd.id && cartItem.size === itemSize))
        if (!itemFinder) {
            console.log('first time add');
            return setCartItems([
                ...cartItems,
                { ...itemToAdd, size: itemSize, quantity: 1 }
            ]);
        }
        else {
           const updatedCartItems = cartItems.map((cartItem) => 
                cartItem.id === itemToAdd.id
                ?   {...cartItem, quantity: cartItem.quantity+1}
                :   console.log('no')
            )
            setCartItems(updatedCartItems);
        }
    }
    
    const value = {
        isCartOpen,
        toggleCartVisibility,
        cartItems,
        setCartItems,
        addItemToCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;