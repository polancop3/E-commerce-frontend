import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { cart, inventory, removeFromCart } from '../../services/products'
export default class Cart extends Component {
    constructor(props){
        super(props)

        const cartData = []

        cart.forEach((quantity, id) => {
            const product = inventory.get(id)
            const totalPrice = (quantity * product.price)
            const displayPrice = `$${totalPrice.toFixed(2)}`
            
            cartData.push({
                id: id,
                quantity: quantity,
                details: product,
                totalPrice: totalPrice,
                displayPrice: displayPrice
            })
        })

        this.state = {cart: cartData }
    }

    removeItemFromCart(id) {
        removeFromCart(id)
        
        const cart = this.state.cart

        const index = cart.findIndex((item) => {return item.id === id})
        cart.splice(index,1)
        this.setState({cart})
     }

     handleCheckOut(){
         alert("Thank you for your purchase!")
     }

    render() {

            const totalStyle = {
            display: "flex",
            justifyContent: "center"
            }
            
            const imgStyle = {
            maxHeight: "200px", 
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "40%",
          }
        
          const imgContainerStyle = {
            borderColor: "gray",
            borderWidth: "1px",
            borderStyle: "solid"
          }
        
          const containerStyle = {
            margin: "1%"
          }
          
          const checkOutContainer = {
              display: "flex",
              justifyContent: "center",
              marginLeft: "300px",
              marginRight: "300px"
          }
          let total = 0;
          
          for(const item of this.state.cart) {
            total += item.totalPrice
          }

          total = `$${total.toFixed(2)}`

          if(this.state.cart.length === 0){
            return(
                <header style={totalStyle}>
                    <h2>Your cart is currently empty</h2>
                </header>
                
            )
          }
        return ( 
            <div style={containerStyle}>
                {this.state.cart.map((item, index) =>
                <Row key={index}>
                    <Col style={imgContainerStyle} md={4}>
                        <img style={imgStyle} src={item.details.img}/>
                    </Col>

                    <Col>
                        <p>Quantity: {item.quantity}</p>
                        <p>Unit price ${item.details.price}</p>
                        <p>Total: {item.displayPrice}</p>
                        <Button onClick={()=>this.removeItemFromCart(item.id)}>Remove</Button>
                    </Col>
                </Row>
              )}
              
                <Row style={checkOutContainer}>
                    <Col>
                        <h6 style={totalStyle}>Total: {total}</h6>
                        {/* {TODO post user order to database} */}
                            <Button onClick={this.handleCheckOut}>Checkout</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}