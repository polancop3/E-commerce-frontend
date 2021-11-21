import React , {Component} from 'react';
import {Card, Button} from "react-bootstrap";
import { getItems } from './getItems';
export default class Cards extends Component{
  constructor(props){
    super(props);
    this.state = {products: []}
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(){
        getItems()
        .then(item => {
            console.log(item)
            this.setState({
                products: item
            })
        })
    }

    componentDidMount() {
       this.getProducts();
    }

  render(){
    return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.state.products.map((item, index) => <p key={index}>{item.title}</p>)}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
    )
  }
}