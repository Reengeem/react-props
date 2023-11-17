import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export function NavBar() {
  return (
    <div className="container">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="g-col-6 space-around">
          <Navbar.Brand href="#home">Barclays Premier League</Navbar.Brand>
          <Nav className="me-auto ms-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Table</Nav.Link>
            <Nav.Link href="#features">Clubs</Nav.Link>
            <Nav.Link href="#pricing">Players</Nav.Link>
            <Nav.Link href="#pricing">Goals</Nav.Link>
            <Nav.Link href="#pricing">Result</Nav.Link>
            <Nav.Link href="#pricing">Fixtures</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default NavBar;
