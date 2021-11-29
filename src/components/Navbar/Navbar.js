import React, { Component } from "react";
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { products } from '../../services/products'

export default class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar bg="dark" variant="dark">
        <BootstrapNavbar.Brand as={Link} to="/home">E-commerce</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart({products.length})</Nav.Link>
        </Nav>
      </BootstrapNavbar>
    )
  }
}