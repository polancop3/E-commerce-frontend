import React , { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { getItems } from '../../services/getItems';

function ProductCard(props) {
  return (
    <Card>
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Text>{props.item.description}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {products: []}
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
        getItems()
        .then(item => {
            this.setState({
                products: item
            })
        })
    }

    componentDidMount() {
       this.getProducts();
    }

  render() {
    return this.state.products.map((item, index) => 
      <ProductCard className="Container" key={index} item = {item}/>
    )
  }
}