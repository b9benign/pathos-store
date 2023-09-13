import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { ReactComponent as DeleteIcon } from '../../assets/vector-graphics/delete-icon.svg.svg';

import './checkout-item.styles.scss';



const CheckoutItem = ({ item }) => {

    const { name, brand, price, quantity, gender, size } = item;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
    const relPrice = price * quantity;

    return (
        <div className="checkout-item-wrapper">
            <DeleteIcon className="checkout-item-delete-icon" onClick={() => deleteItemFromCart(item)}/>
            <div className="checkout-item-image-wrapper">
                <img
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/profile.webp`)}
                    alt="cart item"
                    className="checkout-item-product-image" 
                    loading='lazy'
                />
            </div>

            <div className="checkout-item-info">
                <div className="checkout-item-info-name">{name}</div>
                <div className="checkout-item-info-category">{brand}</div>
                <div className="checkout-item-info-size">{`${gender}'s ${size}`}</div>
                <div className="checkout-item-info-price">{quantity >= 1 && `$${relPrice}`} <span className="checkout-item-info-pip">{quantity > 1 && `(${price})`}</span></div>
            </div>

            <div className="checkout-item-quantity-container">
                <button className="checkout-item-counter-button" onClick={() => addItemToCart(item, size)}>&and;</button>
                <div className="checkout-item-quantity-display" onClick={() => deleteItemFromCart(item)}>{quantity}</div>
                <button className="checkout-item-counter-button" onClick={() => removeItemFromCart(item, size)}>&or;</button>
            </div>
        </div>
    )
}

export default CheckoutItem;