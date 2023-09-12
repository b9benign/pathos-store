import { AddressElement, CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './payments.styles.scss';


const Payments = () => {
    const optionsShipping = {
        mode: 'shipping',
    };
    const stripe = useStripe();
    const elements = useElements();
    const { totalCartPrice } = useContext(CartContext);

    const submitHandler = async (event) => {
        event.preventDefault();
        elements.submit();
        if (!stripe || !elements ) {
            return;
        }
        
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method:'POST',
            header: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ amount: totalCartPrice*100 })
        }).then(r => r.json());
        console.log(response);

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmPayment({
            elements,
            clientSecret: clientSecret,
            confirmParams: {
                return_url: 'http://localhost:8888/checkout'
            }
        });


        if(paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!')
            }
        }
    }

    return (
        <div className="checkout-payments-container">
            <form onSubmit={submitHandler}>
                <div className="checkout-payments-section">
                    <h2>Billing & Shipping</h2>
                    <PaymentElement />
                    <div className="checkout-payments-form-divider" />
                    <AddressElement options={optionsShipping} />
                </div>
                <button type="submit" className="checkout-pay-button">Buy Now</button>
            </form>
        </div>
    )
}

export default Payments;