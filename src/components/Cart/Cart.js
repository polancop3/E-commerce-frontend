import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { products } from '../../services/products'
export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {cart: products }
    }

    removeFromCart(id) {
        const items = products.splice(id,1);
        console.log(items)
        this.setState({items})
        console.log(id)
     }

    render() {

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
          
          const checkOut = {
              display: "flex",
              justifyContent: "center",
              marginLeft: "300px",
              marginRight: "300px"
          }

        return ( 
            <div style={containerStyle}>
                {this.state.cart.map((item, index) =>
                <Row key={index}>
                    <Col style={imgContainerStyle} md={4}>
                        <img style={imgStyle} src={item.img}/>
                    </Col>

                    <Col>
                        <p>${item.price}</p>
                        <Button onClick={()=>this.removeFromCart(index)}>Remove</Button>
                    </Col>
                </Row>
              )}
              
                <Row style={checkOut}>
                  Total:...
                  {/* {TODO post user order to database} */}
                    <Button >Checkout</Button>
                </Row>
            </div>
        )
    }
}