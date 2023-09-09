import { useState } from 'react';

import './payments.styles.scss';
import { AddressElement, Elements, PaymentElement, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payments = () => {
    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51NJH9wB6Wg8FhT26RHodA1lB6L7x6OfK3oUEJ2ozoMX1GnUKspv76lBmyLDO5khPqYM10vVATqhusnroauD1oa2100tVgvtr6q'));
    const optionsPayment = {
        mode: 'payment',
        currency: 'usd',
        amount: 1099,
    };
    const optionsShipping = {
        mode: 'shipping',
    };
    if (!stripePromise) {
        return;
    }
    return (
        <div className="checkout-payments-container">
            <form>
                <div className="checkout-payments-section">
                    <h2>Billing</h2>
                    <Elements stripe={stripePromise} options={optionsPayment}>
                        <PaymentElement className="stripe-payment-element" />
                    </Elements>
                </div>
                <div>
                    <h2>Shipping</h2>
                    <Elements stripe={stripePromise}> 
                        <AddressElement options={optionsShipping} />
                    </Elements>
                </div>
            </form>
            <button className="checkout-pay-button">Buy Now</button>
        </div>
    )
}

export default Payments;