import React from "react";
import { Button, Container, Row, Card} from "react-bootstrap";
import styled from "styled-components";

import Img from "../pic/Homepage.png"
import Img1 from "../pic/Mnarticle.png"
import Img2 from "../pic/Mnwebinar.png"
import Img3 from "../pic/Mnevent.png"

const Landingpages = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:4em;
`

const Center = styled.div`
text-align:center;
`

const Content = styled.div`
top:25%;
bottom:25%;
padding-top:5em;
`
const Styleh1 = styled.p`
font-size:3rem;
text-align:left;
`
const Styleh2 = styled.p`
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 34px;
letter-spacing: 0em;
text-align: left;

`
function Userpage() {
    return (
        <Landingpages >
      <Container>
        <Row>
        <div class="col-md-6 pl-4">
              <Content>
            <Styleh1>Hi !</Styleh1>
            <Styleh2>What are you looking for today? </Styleh2>  
            <p>Want to contribute Articles or Informations to our Community? Become a Youth Contributor!</p> 
            <Center><Button href="/Contribute" variant="warning" size="lg">Become a Youth Contributor</Button></Center>   
          </Content>
          </div>
          <div class="col-md-6">
                <img class="img-responsive" width="85%" height="auto" className="img-responsive" src={Img}  alt="logo" />
              </div>
        </Row>
        <div class="row pt-4">
            <p><b>
            Or check out one of the options to explore!
            </b></p>
        </div>
        <div class="row pt-2">
            <div class="col-md-4">
                <div class="card text-dark bg-warning mb-1">
                    <div class="card-body">
                    <center>
                        <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img1}  alt="logo" />
                        <a href="/Article" class="btn btn-outline-light stretched-link"><b>Article and Issue</b></a>
                    </center>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-dark bg-warning mb-1">
                    <div class="card-body">
                    <center>
                        <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                        <a href="/Webinar" class="btn btn-outline-light stretched-link"><b>Webinar</b></a>
                    </center>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-dark bg-warning mb-1">
                    <div class="card-body">
                    <center>
                        <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img3}  alt="logo" />
                        <a href="/Events" class="btn btn-outline-light stretched-link"><b>Events</b></a>
                    </center>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </Landingpages>
    )
}

export default Userpage
