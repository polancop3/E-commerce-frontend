import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Register from "../Register.js/Register";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/cart"><Cart /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Container>
    </Router>
  );
}
