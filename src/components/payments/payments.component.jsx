import './payments.styles.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payments = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (e) => {
        e.preventDefault();

        if(!stripe && !elements) {
            return;
        }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 10000})
        }).then(res => res.json())

        console.log(response);
    }

    return (
        <div className="payments-comp-container">
            <h2>Payment options</h2>
            <form className="payments-form-container" onSubmit={handlePayment}>
                <CardElement className="stripe-card-element"/>
                <button type="submit">Pej</button>
            </form>
        </div>
    )
}

export default Payments;