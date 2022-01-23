import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Img from "../pic/Login.png"
import NavStart from '../components/NavStart';
import axios from "axios";
import validator from 'validator';
import { Link, MemoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history'

const Logging = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:8em;
`
const Content = styled.div`
top:25%;
bottom:25%;
padding-top:5em;
`
function Register() {
    const [values, setValues] = useState({
        country: "",
        username: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user"
      });
    
      const [errors, setErrors] = useState({});
      const [passwordShown, setPasswordShown] = useState(false);
      const history = createBrowserHistory()
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post("https://youthpedia.herokuapp.com/users/register", {
          username: values.username,
          gender: values.gender,
          country: values.country,
          email: values.email,
          password: values.password,
          role: values.role,
        })
        .then(response => {
          history.push("/login")
        })
        .catch(err => console.log(err.response))
        setErrors(validator(values));
      }
      
    return (
        <div>
            <NavStart/>
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
                        <Form.Group controlId="username">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            name="username"
                            className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                            value={values.username}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                            />
                        </Form.Group>
                        <p></p>
                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <p></p>
                            <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <label className="mx-2 text-xs">Male</label>
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <label className="ml-2 text-xs">Female</label>
                        </Form.Group>

                        <p></p>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                            type="text"
                            name="country"
                            className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                            value={values.country}
                            onChange={handleChange}
                            placeholder="Enter Your Country"
                            />
                        </Form.Group>
                        <p></p>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                            />
                        </Form.Group>
                      <p></p>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type={passwordShown ? "text" : "password"} 
                            name="password"
                            className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            />
                            <div className="text-xs text-red-600	">
                                {errors.password && (
                                    <p className="error">{errors.password}</p>
                                )}
                            </div>
                        </Form.Group>
                        <p></p>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type={passwordShown ? "text" : "password"} 
                            name="confirmPassword"
                            className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            placeholder="Enter Your Confirm Password"
                            />
                            <div className="text-xs text-red-600	">
                                {errors.confirmPassword && (
                                    <p className="error">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </Form.Group>                      
                        <p> </p>
                        <Button 
                        def="default"
                        type="buyNow"
                        onClick={handleFormSubmit}>
                            Sign Up
                        </Button>
                        </Form>
                    <Row className="py-3">
                      <Col>
                      By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
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

export default Register
