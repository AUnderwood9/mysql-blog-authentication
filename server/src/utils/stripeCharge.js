import stripeLoader from 'stripe';
// const vars = require('dotenv').config();
// console.log("Variables", vars);
import dotenv from "dotenv";
const ENV_VARS = dotenv.config();
const stripe = stripeLoader(ENV_VARS.parsed.STRIPE_SK); // define secret key in ENV_VAR
// console.log("Enviornment", ENV_VARS.parsed.STRIPE_SK);

function charge(token, amt) {
    // returning a promise, so when we call .charge, we can use .then(...)
    return stripe.charges.create({
        amount: amt * 100, //amount in cents
        currency: 'usd',
        source: token,
        description: 'Statement description'
    });
};

export { charge };