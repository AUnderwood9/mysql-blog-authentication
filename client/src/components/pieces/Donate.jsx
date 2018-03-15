import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm'; // must be a child of Elements wrapper

class Donate extends Component {

    render() {
        return (
            <StripeProvider apiKey="pk_test_0xFCjQKNGrEJHzwNx7g2I2nJ">
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;