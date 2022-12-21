const stripe = require('stripe')(process.env.STRIPEKEY);

const createCheckoutSession = async (amount, currencyType) => {
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: 'https://localhost:3000/success',
            cancel_url: 'https://localhost:3000/cancel',
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [{
                // Courses to be purchased will be put here
            }],
        });

        return session;
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { createCheckoutSession };