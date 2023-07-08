import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './cart-item.styles.scss';

const CartItem = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-preview-item-container">
            <div className="cart-preview-item">{
                cartItems.map((cartItem) => {
                    const { id, name, brand, category, size, gender, price, quantity } = cartItem;
                    return (
                        <div className="cart-item-container" key={id + size + name}>

                            <div className="cart-item-image-wrapper">
                                <div className="cart-item-product-penunsen">${price}</div>
                                <img
                                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)}
                                    alt="cart item"
                                    className="cart-item-product-image" />
                            </div>
                            <div className="cart-item-info-container">
                                <div className="cart-item-info-name">{name}</div>
                                <div><span className="cart-item-info-brand">{brand} |</span> <span className="cart-item-info-category">{category}</span></div>
                            </div>

                            <div className="cart-item-quantity-counter">
                                <button className="cart-item-counter-button">&and;</button>
                                <div className="cart-item-quantity-display">{quantity}</div>
                                <button className="cart-item-counter-button">&or;</button>
                            </div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}

export default CartItem;