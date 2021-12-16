import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { OfflineBolt } from "@material-ui/icons";
import { logout } from "../../firebase";
import { useEffect } from "react";
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import SearchBar from "./SearchBar";
import "../../vendors/bootstrap/css/navigation-top.css";

const NavigationTop = ({ isLoggedIn }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-brand-custom" href="/">
            Bazinga &nbsp;
            <OfflineBolt />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>
                <Link
                  to="/shop"
                  style={{ "text-decoration": "none", color: "gray" }}
                >
                  Shop
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link
                    to="/laptops"
                    style={{ "text-decoration": "none", color: "black" }}
                  >
                    Laptops
                  </Link>
                  {/* <Nav.Link href="/shop/laptops">Laptops</Nav.Link> */}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/mobiles"
                    style={{ "text-decoration": "none", color: "black" }}
                  >
                    Mobile Phones
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {loggedIn ? "" : <Nav.Link href="/login">Login</Nav.Link>}
            {loggedIn ? <Nav.Link href="/editaccount">Profile</Nav.Link> : ""}

            {loggedIn ? (
              <Nav.Link href="/cart" className="float-right">
                Cart
              </Nav.Link>
            ) : (
              ""
            )}
            {loggedIn ? (
              <Nav.Link href="" onClick={() => logout()}>
                Logout
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationTop;
