import { useState, useEffect } from "react";
import { createContext } from "react";



export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    totalCartPrice: 0,
    totalCartItems: 0,
    setIsCartOpen: () => { },
    setCartItems: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    toggleCartVisibility: () => { },
    deleteItemFromCart: () => { }
});


const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalCartPrice, setTotalCartPrice] = useState(0);


    const toggleCartVisibility = () => setIsCartOpen(!isCartOpen);
    const indexFinder = (array, objectToFind) => {
        return array.findIndex((element) => {
            if (element.hasOwnProperty('quantity') && objectToFind.hasOwnProperty('quantity')) {
                const { quantity: elementQuantity, ...compArr } = element;
                const { quantity: objectQuantity, ...compObj } = objectToFind;
                return JSON.stringify(compArr) === JSON.stringify(compObj);
            }
            else if (element.hasOwnProperty('quantity') && !objectToFind.hasOwnProperty('quantity')) {
                const { quantity: elementQuantity, ...compArr } = element;
                return JSON.stringify(compArr) === JSON.stringify(objectToFind);
            }
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
        const updatedCartItem = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity - 1 };

        if (cartItems[itemIndex].quantity > 1) {
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
    const deleteItemFromCart = (itemToDelete) => {
        const itemIndex = indexFinder(cartItems, itemToDelete)
        console.log(itemIndex);

        return setCartItems(cartItems => {
            const temp = [...cartItems];
            temp.splice(itemIndex, 1);
            return temp;
        });
    }
    
    useEffect(() => {
        const fetchTotalItems = () => {
            if (cartItems.length > 0) {
                const total = cartItems.reduce((acc, currentItem) => {
                    return acc + currentItem.quantity;
                }, 0);
                setTotalCartItems(total);
            }
        }
        return fetchTotalItems();
    }, [cartItems])

    useEffect(() => {
        const fetchTotalPrice = () => {
            if (cartItems.length > 0) {
                const total = cartItems.reduce((acc, currentItem) => {
                    const {price, quantity} = currentItem;
                    return acc + price*quantity;
                }, 0);
                setTotalCartPrice(total);
            }
        }
        return fetchTotalPrice();
    }, [cartItems])

    const value = {
        isCartOpen,
        toggleCartVisibility,
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        totalCartItems,
        totalCartPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;