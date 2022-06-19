import React from "react";
import { Link } from "react-router-dom";
// Bootstrap components
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mb-3">
      <Navbar collapseOnSelect className="px-3" expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">SWR Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/last_recpies">
                Last Recpies
              </Nav.Link>

              <Nav.Link as={Link} to="/popular">
                Popular Recpies
              </Nav.Link>
            </Nav>

          <Nav>
            <Nav.Link as={Link} to={"/admin"} >
              Admin
            </Nav.Link>
          </Nav>

          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default Header;
