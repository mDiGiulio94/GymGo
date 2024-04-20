// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
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
          Login <AccountCircleIcon />
        </>
      ),
      registrati: "Registrazione",
      promozioni: "Promozioni",
    },
  ];

  //   const [evidenzia, setEvidenzia] = useState(false);

  //    const over = {
  //      color: evidenzia ? "rgba(236, 236, 15, 0.904)" : "rgba(0, 0, 0, 0.65)",
  //   }

  //   const onOver = () => {
  //  setEvidenzia(true)
  //   }

  //   const onOut = () => {
  //     setEvidenzia(false)
  //   }

  return (
    <Contenitore>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/">
              <Navbar.Brand>GymGo</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {menu.map((elemento, index) => (
              <Navbar.Collapse id="basic-navbar-nav" key={index}>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className="giallo" to="/">
                      {elemento.home}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="giallo" to="/Servizi">
                      {elemento.servizi}
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link className="giallo" to="/Contatti">
                      {elemento.contatti}
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link className="giallo" to="/Blog">
                      {elemento.blog}
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link className="giallo" to="/Abbonamenti">
                      {elemento.abbonamenti}
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link className="giallo" to="/Promozioni">
                      {elemento.promozioni}
                    </Link>
                  </Nav.Link>

                  <NavDropdown
                    title="Opzioni di accesso"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Nav.Link className="profilo">
                        <Link to="/Registrazione">
                          Nuovo cliente? Prosegui qui: {elemento.registrati}
                        </Link>
                      </Nav.Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Nav.Link className="profilo">
                        <Link to="/Login">
                          Sei già iscritto? Effettua il {elemento.account}
                        </Link>
                      </Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            ))}
          </Container>
        </Navbar>
      </header>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  .bg-body-tertiary {
    background-color: #eff0d1 !important;
    box-shadow: black 2px 3px 3px;
    margin: 0 !important;
  }

  .container {
    margin-left: 10px !important;
    a {
      text-decoration: none;
    }
  }

  .nav-link {
    margin-left: 30px;
    a {
      text-decoration: none;
      color: rgb(0 0 0 / 65%);
    }
  }

  .giallo:hover {
    color: rgba(236, 236, 15, 0.904) !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  .dropdown-menu.show {
    margin-left: 20%;

    a {
      font-weight: 600;
      font-size: 13px;
    }
    .profilo {
      margin-left: 0;
    }
  }

  #basic-nav-dropdown:hover {
    color: rgba(236, 236, 15, 0.904) !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
`;

export default Header;
