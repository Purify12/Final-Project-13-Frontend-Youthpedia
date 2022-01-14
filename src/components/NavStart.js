import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../pic/Logoapp.png"

function NavStart({ setSearch }) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{marginBlockEnd:10}}>
      <Container>
        <Navbar.Brand href="/Beranda">
        <img width="auto" height="auto" className="img-responsive" src={Logo}  alt="logo" />
               </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

              {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form> */}

          </Nav>
          <Nav>

              <>
                <Nav.Link href="/Userpage">Userpage</Nav.Link>
              </> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavStart;
