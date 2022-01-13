import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../pic/Logoapp.png"

function Navbars({ setSearch }) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{marginBlockEnd:10}}>
      <Container>
        <Navbar.Brand href="#">
        <img width="auto" height="auto" className="img-responsive" src={Logo}  alt="logo" />
               </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>

          </Nav>
          <Nav>

              <>
                <Nav.Link href="/Webinar">Webinar</Nav.Link>
                <Nav.Link href="/Contribute">Contribute</Nav.Link>
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Beranda">Beranda</Nav.Link>
                <Nav.Link href="/Favorite">Favorite</Nav.Link>
                <Nav.Link href="/Nofav">Nothing Fav</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
                <NavDropdown
                  title=""
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
              <Nav.Link href="/Login">Login</Nav.Link>
            
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
