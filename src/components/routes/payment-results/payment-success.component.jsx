import './payment-results.styles.scss';

const PaymentSuccess = () => {
    return (
        <div className="payment-success-page-container">
            <div className="payment-success-content-spacer">
                <div className="payment-success-header">Success!</div>
                <div className="payment-success-acknowledgement">Thank you for your purchase &#x2764;</div>
            </div>
        </div>
    )
}

export default PaymentSuccess;