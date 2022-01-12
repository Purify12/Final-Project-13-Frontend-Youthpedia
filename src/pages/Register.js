import React from 'react'
import styled from 'styled-components'
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../pic/Login.png"

const Logging = styled.div`
padding-bottom:4em;
`
const Content = styled.div`
top:25%;
bottom:25%;
padding-top:5em;
`
function Register() {
    return (
        <Logging>    
          <Row>
              <div class="col-md-6">
                <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img}  alt="logo" />
              </div>
              <div class="col-md-6">
              <Content>
              <h1>Register</h1>
                <Card>
                  <div className="loginContainer p-2">
                  <Form onSubmit="">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="name"
                            value="name"
                            placeholder="Enter name"
                            // onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                            type="gender"
                            value="gender"
                            placeholder="male or female"
                            // onChange={(e) => setGender(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            type="email"
                            value="email"
                            placeholder="Enter email"
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            value="password"
                            placeholder="Password"
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="password"
                            value="confirm"
                            placeholder="Confirm Password"
                            // onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>                      

                        <Button variant="primary" type="submit">
                            Register
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
    )
}

export default Register
