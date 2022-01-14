import React from 'react'
import styled from 'styled-components'
import { Row, Button } from "react-bootstrap";
import Img from "../pic/Thanks.png"
import NavUser from '../components/NavUser';
const Container = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:4em;
padding-top:-8em;
`
const Center = styled.div`
text-align:center;
font-weight:bold;
`


const Content = styled.div`
bottom:25%;
`
function Thanks() {
    return (
      <div>
        <NavUser/>
 
        <Container>    
            <Row>
              <div class="col-md-12 text-center">
                <img class="img-responsive" width="40%" height="auto" className="img-responsive" src={Img}  alt="logo" />
                <h4>Thank you for wanting to contribute to Youthpedia!</h4>
                <h4>We will share the good news to your email if you are chosen to become one of our amazing Youth Contributors!</h4>
                <Button href="/Home" variant="warning" size="lg">Return to Homepage</Button>
              </div>
            </Row>                    
        </Container>
        </div>
    )
}

export default Thanks
