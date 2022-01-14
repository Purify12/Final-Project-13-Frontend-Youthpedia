import React from 'react'
import styled from 'styled-components'
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyFav from './../pic/Emptyfav.png';
import Img from "../pic/Emptyfav.png"
import NavUser from '../components/NavUser';
const Container = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:4em;
padding-top:-8em;
`
const Center = styled.div`
text-align:center;
`


const Content = styled.div`
bottom:25%;
`
function NothingFav() {
    return (
      <div>
        <NavUser/>
        <Container>    
            <Row>
              <div class="col-md-12 text-center">
              <h1>Favorite</h1>
                <img width="80%" height="auto" className="img-fluid" src={EmptyFav}  alt="logo" />
                <h4>Looks like you don’t have any favorites yet!</h4>
                <p>Browse our articles, events, webinars or scholarships to find your favorite ones.</p>
              </div>
            </Row>
        </Container>
        </div>
    )
}

export default NothingFav
