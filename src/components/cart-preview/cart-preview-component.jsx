import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';

import './cart-preview.styles.scss'




const CartPreview = () => {

    const { isCartOpen, cartItems } = useContext(CartContext);

    if (isCartOpen) {
        return (
            <div className="cart-preview-container">
                <div className="cart-preview-spacer">


                    <div className="cart-preview-content-wrapper">
                        {cartItems.length === 0
                            ? <div className="cart-empty-text">Your cart is empty.</div>
                            :
                            <>
                                <CartItem />
                                <div className="cart-preview-checkout-wrapper">
                                    <Link className="cart-checkout-button" to="/checkout">Checkout</Link>
                                </div>
                            </>
                        }

                    </div>


                </div>
            </div>
        )
    }
}

export default CartPreview;