import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
export default class Register extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstname" placeholder="First name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="Lastname" placeholder="Last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            EX: sample@sample.com
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    )
  }
}