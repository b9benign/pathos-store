import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/cart-context';
import CheckoutItem from '../../checkout-item/checkout-item.component';

import './checkout.styles.scss';
import Payments from '../../payments/payments.component';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const CheckoutPage = () => {

    const { cartItems, totalCartPrice } = useContext(CartContext);
    const [existingItems, setExistingItems] = useState(cartItems.length > 0)
    const [chevronToggled, setIsChevronToggled] = useState(false);

    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51NJH9wB6Wg8FhT26RHodA1lB6L7x6OfK3oUEJ2ozoMX1GnUKspv76lBmyLDO5khPqYM10vVATqhusnroauD1oa2100tVgvtr6q'));
    const optionsPayment = {
        mode: 'payment',
        currency: 'usd',
        amount: 1099,
    };

    const chevronToggler = () => {
        setIsChevronToggled(!chevronToggled);
    }

    useEffect(() => {
        const unsubscribe = () => {
            if(cartItems.length > 0){
                setExistingItems(true);
            } else {
                setExistingItems(false);
            }
        }
        return unsubscribe();
    },[cartItems])

    return (
        <>
            <div className="checkout-page-container">
                {
                    existingItems
                        ?
                        (
                            <div className="checkout-page-welcome-banner">
                                <span className="checkout-page-welcome-text">Proceed to payment or adjust your cart</span>
                            </div>
                        )
                        : <div className="checkout-page-no-items">Your cart is empty.</div>
                }
                <div className="checkout-page-spacer">

                    {existingItems  &&
                        <div className="checkout-page-items-container">
                            {
                                cartItems.map((item) => {
                                    return (
                                        <CheckoutItem item={item} key={item.size + item.name} />
                                    )
                                })
                            }
                            <Elements stripe={stripePromise} options={optionsPayment}>
                                <Payments/>
                            </Elements>
                        </div>
                    }
                </div>
                <div className={`checkout-page-total-container ${chevronToggled ? '' : 'co-inactive-chevron'}`}>
                <div className="checkout-page-total-price">{`Cart Total: $${totalCartPrice}`}
                    {chevronToggled
                        ? <span className="checkout-page-chevron" onClick={chevronToggler}>&#10094;</span>
                        : <span className="checkout-page-chevron" onClick={chevronToggler}>&#10095;</span>
                    }
                </div>
            </div>
            </div>
            
        </>
    )
}

export default CheckoutPage;