import React from "react";
import { Button, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import NavStart from "../components/NavStart";
import Img from "../pic/Beranda.png"

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
text-align:center;
`
const Styleh2 = styled.p`
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 34px;
letter-spacing: 0em;
text-align: center;

`
function Beranda() {
  return (
    <div>
      <NavStart/>
    <Landingpages >
      <Container>
        <Row>
        <div class="col-md-6 pl-4">
              <Content>
            <Styleh1>Education is the Most Powerful Weapon</Styleh1>
            <Styleh2>Discover tremendous and verified information just for you!</Styleh2>   
            <Center><Button href="/login" variant="warning" size="lg">Getting Started</Button></Center>   
          </Content>
          </div>
          <div class="col-md-6">
                <img class="img-responsive" width="100%" height="auto" className="img-responsive" src={Img}  alt="logo" />
              </div>
        </Row>
      </Container>
    </Landingpages>
    </div>
  )
}

export default Beranda
