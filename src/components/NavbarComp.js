import React, {Component} from "react";
import { Navbar,  Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './Cart.js';
import Catalog from './Catalog.js';
import Home from './Home.js';

export default class NavbarComp extends Component{
  render(){
    return(
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/home">E-commerce</Navbar.Brand>
          < Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
            </Container>
  </Navbar>
     <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/Catalog">
            <Catalog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
      </Router>
    )
  }
}