import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';

import './payments.styles.scss';


const Payments = () => {
    const optionsShipping = {
        mode: 'shipping',
    };
    const stripe = useStripe();
    const elements = useElements();
    const { totalCartPrice, setCartItems } = useContext(CartContext);

    const [isProcessing, setIsProcessing] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        elements.submit();
        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: 'POST',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: totalCartPrice * 100 })
        }).then(r => r.json());
        console.log(response);

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmPayment({
            elements,
            clientSecret: clientSecret,
            confirmParams: {
                return_url: "https://pathos-store.netlify.app/checkout/payment-succeeded"
            },
        });


        if (paymentResult.error) {
            alert("Something went wrong: ", paymentResult.error.message);
            setIsProcessing(false);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                setCartItems([]);
                setIsProcessing(false);
            }
        }
    }

    return (
        <>  
            <div className="checkout-payments-container">
                <form onSubmit={submitHandler}>
                    <div className="checkout-payments-section">
                        <h2>Billing & Shipping</h2>
                        <PaymentElement />
                        <div className="checkout-payments-form-divider" />
                        <AddressElement options={optionsShipping} />
                    </div>
                    <button type="submit" className={`checkout-pay-button ${!isProcessing ? 'pm-not-processing' : 'pm-is-processing'}`} disabled={isProcessing}>{!isProcessing ? 'Buy Now' : 'Processing...'}</button>
                </form>
            </div>
        </>

    )
}

export default Payments;