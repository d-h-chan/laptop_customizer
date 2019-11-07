import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return (
                <CartItem 
                    feature={feature}
                    idx={idx}
                    selectedOption={this.props.selected[feature]}
                />
            );
        });
        return (
            <>
                <h2>Your cart</h2>
                {summary}
                <Total
                    selected={this.props.selected}
                />
            </>
        );
    }
}

export default Cart;
