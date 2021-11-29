import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {products} from '../../services/products'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {cart: products }
    }
    render() {
        return ( 
            <div>
                <h1>Cart</h1>
                {this.state.cart.map(item =><div>{item.title}</div>)}
            </div>
        )
    }
}