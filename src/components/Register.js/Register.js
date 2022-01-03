import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';
export default class Register extends Component {
  constructor(props){
    super(props)
    this.state = { 
      firstName: "", 
      lastName: "", 
      email: "", 
      password: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(e){
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const register = { firstName, lastName, email, password }

    try {
      const res = await axios.post("http://localhost:8080/customers", register)
      alert("you have successfuly registered");
    } catch(e){
      console.log(e.message)
    }
  }

    handleChange(e){
      this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Form 
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstname" placeholder="First name" name="firstName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="Lastname" placeholder="Last name" name="lastName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            EX: sample@sample.com
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    )
  }
}