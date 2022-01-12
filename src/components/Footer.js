import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        color:"gray",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        paddingTop:2,

      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; 2022 Youthpedia</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
