import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { }
});


const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCartVisibility = () => setIsCartOpen(!isCartOpen);
    const [cartItems, setCartItems] = useState([]);
    const indexFinder = (array, objectToFind) => {
        return array.findIndex((element) => {
            if (element.hasOwnProperty('quantity') && objectToFind.hasOwnProperty('quantity')) {
                const { quantity: elementQuantity, ...compArr } = element;
                const { quantity: objectQuantity, ...compObj } = objectToFind;
                console.log('both')
                return JSON.stringify(compArr) === JSON.stringify(compObj);
            }
            else if (element.hasOwnProperty('quantity') && !objectToFind.hasOwnProperty('quantity')) {
                console.log('only cartItems')
                const { quantity: elementQuantity, ...compArr } = element;
                return JSON.stringify(compArr) === JSON.stringify(objectToFind);
            }
            console.log('default');
            return JSON.stringify(element) === JSON.stringify(objectToFind);
        })
    }

    const addItemToCart = (itemToAdd, itemSize) => {
        const itemFinder = cartItems.find((cartItem) => (cartItem.id === itemToAdd.id && cartItem.size === itemSize));
        if (!itemFinder) {
            return setCartItems([
                ...cartItems,
                { ...itemToAdd, size: itemSize, quantity: 1 }
            ]);
        }
        else if (itemFinder) {
            const compItem = {
                ...itemToAdd,
                size: itemSize
            }

            const itemIndex = indexFinder(cartItems, compItem);
            const updatedCartItem = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity + 1 }
            return setCartItems(cartItems => {
                const temp = [...cartItems];
                temp[itemIndex] = updatedCartItem;
                return temp;
            }
            )
        }
        else {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === itemToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
            setCartItems(updatedCartItems);
        }
    }
    const removeItemFromCart = (itemToRemove, itemSize) => {
        const compItem = {
            ...itemToRemove,
            size: itemSize
        }
        const itemIndex = indexFinder(cartItems, compItem);
        const updatedCartItem = {...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity - 1};

        if(cartItems[itemIndex].quantity > 1) {
            return setCartItems(cartItems => {
                const temp = [...cartItems];
                temp[itemIndex] = updatedCartItem;
                return temp;
            })
        } else { 
            return setCartItems(cartItems => {
                const temp = [...cartItems];
                temp.splice(itemIndex, 1);
                return temp;
            })        
        }
    }

    const value = {
        isCartOpen,
        toggleCartVisibility,
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;