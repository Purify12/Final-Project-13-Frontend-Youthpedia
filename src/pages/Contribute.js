import React from "react";
import { Button, Container, Row, Form, Col, Card} from "react-bootstrap";
import styled from "styled-components";
import Img from "../pic/Contribute.png"
import NavUser from "../components/NavUser";

const Landingpages = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:6em;
`

const Center = styled.div`
text-align:center;
justify-content:center;
align-items:center;
`


const Content = styled.div`
top:25%;
bottom:25%;
padding-top:5em;
`
const Styleh1 = styled.p`
font-size:2rem;
text-align:center;
`
function Contribute() {
    return (
        <div>
            <NavUser/>
            <Landingpages >
                <Container>
                    <div class="row pb-4">
                    <div class="col-md-6 pl-4">
                        <Content>
                        <Styleh1>Hello! Thank you so much for your enthusiasm to contribute to Youthpedia!</Styleh1>
                    </Content>
                    </div>
                    <div class="col-md-6">
                        <Center>
                        <img class="img-responsive" width="50%" height="auto" className="img-responsive" src={Img}  alt="logo" />
                        </Center>
                            
                        </div>
                    </div>
                    <div class="row pt-2">
                        <Card>
                            <h1><Center>Fill in the form below as well as  the chosen information  you would like  to share</Center></h1>
                            <Center>
                            <Form>
                                
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Name/Company
                                    </Form.Label>
                                    <Col sm="10 ">
                                    <Form.Control type="name" placeholder="Name" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10 ">
                                    <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextTypeInfo">
                                    <Form.Label column sm="2 " >
                                        Type of Information
                                    </Form.Label>
                                    <Col sm="10 " >
                                    <Form.Control type="text" placeholder="Type Of Info" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFile">
                                    <Form.Label column sm="2 " >
                                        Input File Picture or More Info 
                                    </Form.Label>
                                    <Col sm="10 ">
                                    <Form.Control type="file" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Center><Button href="/Thanks" variant="warning" size="lg">Submit</Button></Center>   
                                <p> </p>
                                </Form>
                                </Center>
                                </Card>
                    </div>
                </Container>
            </Landingpages>
        </div>
    )
}

export default Contribute
