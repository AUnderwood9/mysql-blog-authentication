import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';
import { withRouter } from "react-router-dom";

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            customerAmount: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.stripe.createToken({name: this.state.customerName })
        .then(({token}) => {
            postCharge({ id: token.id, amount: +this.state.customerAmount });
        })
        .catch((err) => {
            console.log(err);
        });

        window.location = "/";
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    handleAmountInput(e){
        this.setState({ customerAmount: e.target.value });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                <CardSection />
                <input onChange={(e) => this.handleAmountInput(e)} type="number" placeholder="Amount" htmlFor="amount" id="amount" required/>
                <button>SUBMIT</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);
