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
import { logout } from "../../firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useHistory } from "react-router-dom";

const AdminNavbar = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const history = useHistory();
  const authListener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        history.push("/");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
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
            {loggedIn && (
              <Nav.Link href="" onClick={() => logout()}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;