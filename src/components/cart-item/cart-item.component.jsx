import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './cart-item.styles.scss';

const CartItem = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className="cart-preview-item-container">
            <div className="cart-preview-item">{
                cartItems.map((cartItem) => {
                    const { name, brand, size, gender, price, quantity } = cartItem;
                    return (
                        <div className="cart-item-container" key={size + name}>

                            <div className="cart-item-image-wrapper">
                                <img
                                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)}
                                    alt="cart item"
                                    className="cart-item-product-image" />
                            </div>
                            <div className="cart-item-info-container">
                                <div className="cart-item-info-name">{name}</div>
                                <div className="cart-item-info-brand">{brand} | {size}</div>
                                <div className="cart-item-info-price">${price}</div>
                            </div>

                            <div className="cart-item-quantity-counter">
                                <button className="cart-item-counter-button" onClick={() => addItemToCart(cartItem, size)}>&and;</button>
                                <div className="cart-item-quantity-display">{quantity}</div>
                                <button className="cart-item-counter-button" onClick={() => removeItemFromCart(cartItem, size)}>&or;</button>
                            </div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}

export default CartItem;