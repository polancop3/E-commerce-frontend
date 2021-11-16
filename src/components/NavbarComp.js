import React, {Component} from "react";
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap';

export default class NavbarComp extends Component{
  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Catalog</Nav.Link>
      <Nav.Link href="#pricing">Cart</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}