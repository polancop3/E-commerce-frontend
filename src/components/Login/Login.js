import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
    constructor(){
        super();
        this.state = {}
        //this.basicAuthorize = this.basicAuthorize.bind(this);
    }
    // basicAuthorize(e){
    //     e.preventDefault();
    //  let username = this.state.username;
    //  let password = this.state.password;

    //  return axios.post("http://localhost:8080/login",{
    //     username : 'user1',
    //     password : 'user1Pass'
    //  })
     
    // }
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
            <Button variant="primary" type="submit" onSubmit={this.basicAuthorize}>
                Submit
            </Button>
            </Form>
        );
    }
}

export default Login;