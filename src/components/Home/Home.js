import React , { Component } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { getProducts, handleAddToCart } from '../../services/products';
// Card template
function ProductCard(props) {
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

  return (
    <div style={containerStyle}>
      <Row>
        <Col style={imgContainerStyle} md={4}>
          <img style={imgStyle} src={props.item.img}/>
        </Col>

        <Col>
          <Row><h4>{props.item.title}</h4></Row>
          <Row><p>{props.item.description}</p></Row>
          {/* <Row><p>{props.item.category}</p></Row> */}
          <Row><h6>${props.item.price}</h6></Row>
          <Button onClick={() => handleAddToCart(props.item)}>Add to cart</Button>
        </Col>
      </Row>
      <hr/>
    </div>  
  )
}

export default class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {products: []}
  }
  // Set cart items to state
  componentDidMount() {
    getProducts().then(products => this.setState({ products }))
  }
  // Pass products items to product card components as props
  render() {
    return (
      <Col>
        {this.state.products.map((item, index) => { 
          return <ProductCard key={index} item = {item}/>
         }
        )}
      </Col>
    )
  }
}