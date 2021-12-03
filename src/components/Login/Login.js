import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
    render() {
        return (
            <Form>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        );
    }
}

export default Login;