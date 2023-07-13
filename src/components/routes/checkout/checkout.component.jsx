import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
import './checkout.styles.scss';
import CheckoutItem from '../../checkout-item/checkout-item.component';


const CheckoutPage = () => {

    const {cartItems} = useContext(CartContext);
    const existingItems = () => cartItems.length > 0;

    return (
        <div className="checkout-page-container">
            <div className="checkout-page-welcome-banner">
                <span className="checkout-page-welcome-text">Proceed to payment or adjust your cart</span>
            </div>
            <div className="checkout-page-spacer">

                {   existingItems ?
                    <div className="checkout-page-items-container">
                        {
                            cartItems.map((item) => {
                                return (
                                    <CheckoutItem item={item} key={item.size + item.name}/>
                                )
                            })
                        }
                    </div>
                    :''
                }

            </div>
        </div>
    )
}

export default CheckoutPage;