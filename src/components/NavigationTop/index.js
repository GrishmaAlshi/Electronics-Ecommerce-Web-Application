import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OfflineBolt } from "@material-ui/icons";
import { useEffect } from "react";
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";

const NavigationTop = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Bazinga &nbsp;
            <OfflineBolt />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/add">Add</Nav.Link>
            <Nav.Link href="/admin/update">Update</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationTop;