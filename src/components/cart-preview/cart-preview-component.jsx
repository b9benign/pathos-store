import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './cart-preview.styles.scss'



const CartPreview = () => {

    const {isCartOpen} = useContext(CartContext);

    if (isCartOpen) {
        return (
            <div className="cart-preview-container">
                <div className="cart-preview-spacer">
                    <div className="cart-preview-content-wrapper">
                        <div className="cart-empty-text">Your cart is empty.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartPreview;