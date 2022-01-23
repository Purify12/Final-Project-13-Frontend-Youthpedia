import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../pic/Login.png"
import NavStart from '../components/NavStart';
const Logging = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:4em;
`
const Content = styled.div`
top:25%;
bottom:25%;
padding-top:5em;
`

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
  };

    return (
      <div>
        <NavStart/>
        <Logging>    
          <Row>
              <div class="col-md-6">
                <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img}  alt="logo" />
              </div>
              <div class="col-md-6 pl-4">
              <Content>
              <h1>Login</h1>
                <Card>
                  <div className="loginContainer p-2">
                    <Form onSubmit="">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <p> </p>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <p> </p>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>

                    <Row className="py-3">
                      <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                      </Col>
                    </Row>
                  </div>
                  </Card>
              </Content>  
              </div>
          </Row>
          
        </Logging>
        </div>
    )
}

export default Login
