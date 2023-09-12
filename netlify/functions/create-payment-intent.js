require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);


exports.handler = async (e) => {
    try {
        const { amount } = JSON.parse(e.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {enabled: true}
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 400,
            body: JSON.stringify({error})
        }
    }
}