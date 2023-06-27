import { useState } from "react";
import { createContext } from "react";





export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
});


const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCartVisibility = () => setIsCartOpen(!isCartOpen);
    
    const value = {isCartOpen, toggleCartVisibility};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;