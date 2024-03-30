import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const menu = [
    {
      home: "Home",
      servizi: "Servizi",
      contatti: "Contatti",
      blog: "Blog",
      abbonamenti: "Abbonamenti",
      account: (
        <>
          <AccountCircleIcon /> Account
        </>
      ),
    },
  ];

  return (
    <header>
      <Navbar id="provaNav" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">GymGo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {menu.map((elemento, index) => (
            <Navbar.Collapse key={index} id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">{elemento.home}</Nav.Link>
                <Nav.Link href="#link">{elemento.servizi}</Nav.Link>
                <Nav.Link href="#link">{elemento.contatti}</Nav.Link>
                <Nav.Link href="#link">{elemento.blog}</Nav.Link>
                <Nav.Link href="#link">{elemento.abbonamenti}</Nav.Link>
                <Nav.Link id="profilo" href="#link">
                  {elemento.account}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ))}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
