import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div className="navi">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/aid_to_Ukraine/">
            <img src="images/Logo.svg" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                className="me-4"
                title="Про нас"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/maindream">
                  Мета та історія фонду
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/ourteam">
                  Команди та партнери
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/documents">
                  Документація та звітність
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="me-4"
                title="Проекти"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/current">
                  Поточні потреби
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/successfulstories">
                  Успішні історіі
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contacts" className="me-3">
                Контакти
              </Nav.Link>
              <NavDropdown className="me-4" title="УКР" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Українська
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
              </NavDropdown>
              <Button variant="warning">Допомогти</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
